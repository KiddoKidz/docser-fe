import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    position: "flex",
    marginBottom: "5px",
  },
  item: {
    verticalAlign: "middle",
    display: "inline-flex",
    fontSize: "12px",
    color: "#444444",
  },
  icon: {
    paddingTop: "2px",
    paddingRight: " 5px",
    color: "#444444",
    width: "14px",
    height: "14px",
  },
}));
