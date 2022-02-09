import React from "react";
import {
  Modal,
  Box,
  Paper,
  Divider,
  Button,
  Link,
  Fade,
  Typography,
  Backdrop,
} from "@material-ui/core";
import { useStyles, StyledCloseIcon } from "./style";

export default function UploadModal({
  open,
  handleOpenAndClose,
  handleOnChangeSelectFile,
  handleOnClickUploadButton,
  templateLink,
  selectedFile,
}) {
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={handleOpenAndClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={open}>
        <Paper className={classes.paper} elevation={0}>
          <Box display="flex" justifyContent="space-between" margin="1em">
            <Typography variant="h6">Upload Toc</Typography>
            <StyledCloseIcon onClick={handleOpenAndClose} />
          </Box>
          <Divider />
          <Box margin="1em">
            <Typography variant="body1">
              1. Download <Link href={templateLink}>this</Link> template
            </Typography>
            <Typography variant="body1">
              2. Add your data to the template file (make sure to export or save as a .csv)
            </Typography>
            <Typography variant="body1" gutterBottom>
              3. Upload it below for processing
            </Typography>
            <Box>
              <label htmlFor="button-browse-file">
                <input
                  className={classes.input}
                  accept="text/csv"
                  id="button-browse-file"
                  type="file"
                  onChange={handleOnChangeSelectFile}
                />
                <Button variant="contained" component="span">
                  Browse
                </Button>
              </label>
              {selectedFile && (
                <Typography variant="body1" component="span">
                  {" "}
                  {selectedFile.name}
                </Typography>
              )}
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                component="span"
                color="primary"
                onClick={handleOnClickUploadButton}>
                Upload
              </Button>
            </Box>
          </Box>
        </Paper>
      </Fade>
    </Modal>
  );
}
