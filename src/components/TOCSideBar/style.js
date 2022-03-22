import { SwipeableDrawer, withStyles } from "@material-ui/core";

export const StyledDrawer = withStyles({
  root: {
    position: "relative",
    zIndex: 0,
  },
  paper: {
    backgroundColor: "#F4F7FA",
    border: "none",
    maxWidth: "300px",
  },
})(SwipeableDrawer);
