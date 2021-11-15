import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    flexGrow: 1,
    backgroundColor: "#1C9AEA",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  titleHeader: {
    height: "auto",
    width: 240,
  },
  image: {
    height: 280,
    width: 280,
    marginLeft: "40px",
  },
  title: {
    fontSize: "36px",
    color: "#ffffff",
  },
}));
