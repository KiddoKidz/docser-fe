import React from "react";
import { Divider, Paper, Box, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const TypographyStyled = withStyles({
  root: {
    marginLeft: "5px",
  },
})(Typography);

const PaperStyled = withStyles((theme) => ({
  root: {
    backgroundColor: "#F4F7FA",
    border: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      cursor: "pointer",
    },
  },
}))(Paper);

export default function UploadButton({ label, icon, onClick }) {
  return (
    <>
      <Divider />
      <PaperStyled onClick={onClick} square elevation={0}>
        <Box padding="12px" display="flex" alignItems="center">
          {icon}
          <TypographyStyled variant="body1" component="span">
            {label}
          </TypographyStyled>
        </Box>
      </PaperStyled>
    </>
  );
}
