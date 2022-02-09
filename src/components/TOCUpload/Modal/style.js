import { makeStyles, withStyles } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";

export const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
    "& ~ *": {
      marginRight: theme.spacing(1),
    },
  },
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
  },
}));

export const StyledCloseIcon = withStyles({
  root: {
    "&:hover": {
      cursor: "pointer",
    },
  },
})(CloseIcon);
