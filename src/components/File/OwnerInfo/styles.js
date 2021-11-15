import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

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
    paddingRight: "5px",
    color: "#444444",
    width: "14px",
    height: "14px",
  },
}));

export const OwnerToolTip = withStyles((theme) => ({
  arrow: {
    color: theme.palette.common.white,
  },
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "black",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);
