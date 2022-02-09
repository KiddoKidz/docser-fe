import React from "react";
import { TreeView, TreeItem } from "@material-ui/lab";
import { Box, Typography, Link, withStyles } from "@material-ui/core";
import {
  FolderOutlined as FolderOutlinedIcon,
  DescriptionOutlined as DescriptionOutlinedIcon,
  ArrowRightOutlined as ArrowRightOutlinedIcon,
  ArrowDropDownOutlined as ArrowDropDownOutlinedIcon,
  Launch as LaunchIcon,
} from "@material-ui/icons";

const StyledTreeView = withStyles({
  root: {
    maxWidth: "100%",
    flexGrow: 1,

    "& .MuiTreeItem-content": {
      marginBottom: 5,
    },

    "& .MuiTreeItem-iconContainer": {
      width: 27,
      justifyContent: "right",
    },
  },
})(TreeView);

const StyledLink = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    color: "black",
  },
})(Link);

const StyledTreeItem = ({ nodeId, label, labelIcon: LabelIcon, url, children }) => (
  <TreeItem
    label={
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="body1" component="span">
          {label}
        </Typography>
        {url && (
          <StyledLink target="_blank" href={url}>
            <LaunchIcon fontSize="small" />
          </StyledLink>
        )}
      </Box>
    }
    nodeId={nodeId}
    icon={LabelIcon && <LabelIcon />}>
    {children}
  </TreeItem>
);

const ExpandIcon = () => (
  <>
    <ArrowRightOutlinedIcon />
    <FolderOutlinedIcon />
  </>
);

const CollapseIcon = () => (
  <>
    <ArrowDropDownOutlinedIcon />
    <FolderOutlinedIcon />
  </>
);

export default function TOCTree({ treeData }) {
  const treeDataDeepCopied = JSON.parse(JSON.stringify(treeData));

  const filterDirectChildFoldersOrFiles = (childFoldersOrFiles, parentFolder) => {
    const directChildFoldersOrFiles = [];
    const remainderChildFoldersOrFiles = [];

    while (childFoldersOrFiles.length > 0) {
      const currentFolderOrFile = childFoldersOrFiles.pop();
      if (currentFolderOrFile.parents.at(-1) === parentFolder.code) {
        directChildFoldersOrFiles.push(currentFolderOrFile);
        // continue;
      }
      if (currentFolderOrFile.parents.includes(parentFolder.code)) {
        remainderChildFoldersOrFiles.push(currentFolderOrFile);
        // continue;
      }
    }

    return [directChildFoldersOrFiles, remainderChildFoldersOrFiles];
  };

  const renderTree = (folders, files, parentFolder) => {
    const [directChildFolders, remainderChildFolders] = filterDirectChildFoldersOrFiles(
      folders,
      parentFolder,
    );
    const [directChildFiles, remainderChildFiles] = filterDirectChildFoldersOrFiles(
      files,
      parentFolder,
    );

    return (
      <StyledTreeItem nodeId={parentFolder.code} label={parentFolder.name} url={parentFolder.url}>
        {directChildFolders.map((folder) =>
          renderTree(remainderChildFolders, remainderChildFiles, folder),
        )}
        {directChildFiles.map((file) => (
          <StyledTreeItem
            nodeId={file.code}
            label={file.name}
            labelIcon={DescriptionOutlinedIcon}
            url={file.url}
          />
        ))}
      </StyledTreeItem>
    );
  };

  return (
    <StyledTreeView defaultCollapseIcon={<CollapseIcon />} defaultExpandIcon={<ExpandIcon />}>
      {treeDataDeepCopied?.folders?.root?.withCode?.map((rootFolder) =>
        renderTree(treeDataDeepCopied?.folders.child, treeDataDeepCopied?.files.child, rootFolder),
      )}
      {treeDataDeepCopied?.folders?.root?.withoutCode?.map((rootFolder) => (
        <StyledTreeItem
          nodeId={rootFolder.name}
          label={rootFolder.name}
          labelIcon={FolderOutlinedIcon}
          url={rootFolder.url}
        />
      ))}
      {treeDataDeepCopied?.files?.root?.map((rootFile) => (
        <StyledTreeItem
          nodeId={rootFile.code}
          label={rootFile.name}
          labelIcon={DescriptionOutlinedIcon}
          url={rootFile.url}
        />
      ))}
    </StyledTreeView>
  );
}
