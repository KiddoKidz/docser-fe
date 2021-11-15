import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const LoginButtonStyled = withStyles({
  root: {
    boxShadow: "none",
    width: 230,
    height: 42,
    variant: "contained",
    textTransform: "none",
    fontSize: 20,
    color: "black",
    borderRadius: 3,
    backgroundColor: "#FFFFFF",
    fontFamily: "Metropolis-Medium",
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
  },
})(Button);

export const useStyles = makeStyles(() => ({
  loginText: {
    color: "#444444",
  },
}));
