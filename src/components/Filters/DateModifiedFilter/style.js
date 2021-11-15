import { InputBase, withStyles } from "@material-ui/core";

export const StyledDateInput = withStyles({
  input: {
    backgroundColor: "#FFFFFF",
    width: "200px",
    height: "40px",
    borderRadius: 3,
    border: "1px solid #E8E8E8",
    fontSize: 14,
    fontFamily: "Metropolis",
    padding: "0% 4%",
    marginTop: "10px",
  },
})(InputBase);
