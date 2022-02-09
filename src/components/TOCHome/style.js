import { Box, withStyles } from "@material-ui/core";

export const LogoContainer = withStyles({
  root: {
    textAlign: "center",
    "& img": {
      maxWidth: "80%",
      maxHeight: "100%",
    },
  },
})(Box);
