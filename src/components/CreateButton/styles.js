import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export const StyledCreateButton = withStyles({
  root: {
    width: 243,
    height: 42,
    variant: "contained",
    color: "white",
    borderRadius: 3,
    background: "none",
    backgroundColor: "#1C9AEA",
    "&:hover": {
      backgroundColor: "#1478C9",
    },
  },
})(Button);

export const StyledMenu = withStyles({
  paper: {
    border: "1.5px solid #1C9AEA",
    width: 243,
  },
})(Menu);

export const StyledMenuItem = withStyles({
  root: {
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#D1F7FD",
    },
  },
})(MenuItem);

export const useStyles = makeStyles(() => ({
  buttonText: {
    textTransform: "none",
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Metropolis",
    color: "white",
    margin: 15,
    paddingTop: 1,
  },
  divider: {
    height: 24,
    margin: 3,
    background: "white",
  },
  icon: {
    paddingTop: 6,
  },
}));
