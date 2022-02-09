import React from "react";
import { Link } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import {
  Folder as FolderIcon,
  DescriptionOutlined as DescriptionOutlinedIcon,
} from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";

import { FileWrapper, TitleWrapper, InfoWrapper, Title, MetadataWrapper } from "./styles";
import LocationBreadcrumb from "../File/LocationBreadcrumb";

const DescriptionOutlinedIconStyled = withStyles({
  root: {
    fontSize: "64px",
  },
})(DescriptionOutlinedIcon);

const FolderIconStyled = withStyles({
  root: {
    fontSize: "64px",
  },
})(FolderIcon);

export default function TOCFile({ fileTitle, location, locationLink, fileLink, fileType }) {
  return (
    <FileWrapper data-testid="file-component">
      {fileType === "file" ? (
        <DescriptionOutlinedIconStyled color="disabled" />
      ) : (
        <FolderIconStyled color="disabled" />
      )}
      <InfoWrapper>
        <TitleWrapper>
          <Title>
            <Link href={fileLink} target="_blank" variant="subtitle1">
              {ReactHtmlParser(fileTitle)}
            </Link>
          </Title>
        </TitleWrapper>

        <MetadataWrapper>
          {location && <LocationBreadcrumb location={location} locationLink={locationLink} />}
        </MetadataWrapper>
      </InfoWrapper>
    </FileWrapper>
  );
}
