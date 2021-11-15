import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    round: "false",
    "& .MuiPaginationItem-root:hover": {
      backgroundColor: "transparent",
    },
    "& .Mui-selected": {
      backgroundColor: "transparent",
      color: "black",
      fontWeight: "bold",
    },
  },
}));
