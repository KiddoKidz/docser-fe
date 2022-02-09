import { withStyles } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

export const StyledToggleButton = withStyles((theme) => ({
  root: {
    padding: "5px 3px",
    backgroundColor: theme.palette.common.white,
    textTransform: "none",
    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.main,
      "& a": {
        color: theme.palette.common.white,
      },
    },
    width: "121.5px",
  },
  label: {
    "& a": {
      textDecoration: "none",
      color: theme.palette.primary.main,
      fontWeight: " bold",
      fontSize: 12,
    },
  },
}))(ToggleButton);

export const StyledToggleButtonGroup = withStyles({
  root: {
    width: "243px",
  },
})(ToggleButtonGroup);
