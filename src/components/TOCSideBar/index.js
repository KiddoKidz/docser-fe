import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { Box, Toolbar, useMediaQuery, useTheme, CircularProgress } from "@material-ui/core";
import {
  EditOutlined as EditOutlinedIcon,
  CloudUploadOutlined as CloudUploadOutlinedIcon,
} from "@material-ui/icons";

import PageSwitcher from "../PageSwitcher";
import { StyledDrawer } from "./style";
import TOCTree from "../TOCTree";
import { UploadButton, UploadModal } from "../TOCUpload";
import updateTOCData from "../../utils/updateTOCData";
import updateTOCHomepageData from "../../utils/updateTOCHomepageData";

export default function TOCSideBar({
  opened,
  isAdmin,
  action,
  type,
  treeData,
  refreshTreeData,
  refreshHomepageData,
}) {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [templateLink, setTemplateLink] = useState("");

  const [currentUploadTOCType, setCurrentUploadTOCType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const infoSnackbarAction = () => <CircularProgress size={20} />;

  const handleUploadModalOpenAndClose = () => {
    setUploadModalOpen(!uploadModalOpen);
  };

  const handleOnChangeSelectFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleOnClickUploadFileButton = () => {
    if (!selectedFile) {
      return;
    }

    const closeInfoThenEnqueueResponseSnackbar = (infoSnackbarKey, responseMessage, isError) => {
      closeSnackbar(infoSnackbarKey);
      enqueueSnackbar(responseMessage, { variant: isError ? "error" : "success" });
    };

    const infoSnackbarKey = enqueueSnackbar(`Uploading ${selectedFile.name}`, {
      variant: "info",
      autoHideDuration: null,
      action: infoSnackbarAction,
    });

    if (currentUploadTOCType === "DATA") {
      updateTOCData(selectedFile).then((body) => {
        refreshTreeData();
        closeInfoThenEnqueueResponseSnackbar(infoSnackbarKey, body.detail, body.error);
      });
    }

    if (currentUploadTOCType === "HOMEPAGE") {
      updateTOCHomepageData(selectedFile).then((body) => {
        refreshHomepageData();
        closeInfoThenEnqueueResponseSnackbar(infoSnackbarKey, body.detail, body.error);
      });
    }
  };

  const setUpAndOpenModal = (templateUrl, uploadTOCType) => {
    setTemplateLink(templateUrl);
    setCurrentUploadTOCType(uploadTOCType);
    handleUploadModalOpenAndClose();
  };

  const onClickUploadTOCButton = () => {
    setUpAndOpenModal(process.env.REACT_APP_TOC_DATA_TEMPLATE_URL, "DATA");
  };

  const onClickEditHomepageButton = () => {
    setUpAndOpenModal(process.env.REACT_APP_TOC_HOMEPAGE_DATA_TEMPLATE_URL, "HOMEPAGE");
  };

  useEffect(() => {
    if (!opened) {
      setUploadModalOpen(false);
    }
  }, [opened, mobile]);

  useEffect(() => {
    if (!uploadModalOpen) {
      setTemplateLink("");
      setCurrentUploadTOCType("");
      setSelectedFile(null);
    }
  }, [uploadModalOpen]);

  return (
    <div>
      <StyledDrawer
        data-testid="filterBar"
        variant={!mobile ? "persistent" : "temporary"}
        open={!mobile || opened}
        onOpen={action}
        onClose={action}
        swipeAreaWidth={70}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}>
        <Toolbar />

        <Box margin="30px 35px 5px">
          <PageSwitcher type={type} />
        </Box>

        <Box margin="30px 35px 5px">
          <TOCTree treeData={treeData} />
        </Box>
        {isAdmin && (
          <>
            <Box position="absolute" bottom="0" width="100%">
              <UploadButton
                label="Upload ToC"
                icon={<CloudUploadOutlinedIcon />}
                onClick={() => onClickUploadTOCButton()}
              />
              <UploadButton
                label="Edit Homepage"
                icon={<EditOutlinedIcon />}
                onClick={() => onClickEditHomepageButton()}
              />
            </Box>
            <UploadModal
              open={uploadModalOpen}
              handleOpenAndClose={handleUploadModalOpenAndClose}
              templateLink={templateLink}
              handleOnChangeSelectFile={handleOnChangeSelectFile}
              handleOnClickUploadButton={handleOnClickUploadFileButton}
              selectedFile={selectedFile}
            />
          </>
        )}
      </StyledDrawer>
    </div>
  );
}
