import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const LogoutButtonStyled = withStyles({
  root: {
    width: 145,
    height: 42,
    variant: "contained",
    textTransform: "none",
    fontSize: 15,
    fontWeight: 500,
    color: "white",
    borderRadius: 3,
    background: "none",
    backgroundColor: "#1C9AEA",
    fontFamily: "Metropolis",
    "&:hover": {
      backgroundColor: "#1478C9",
    },
  },
})(Button);
