/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { createMuiTheme, MuiThemeProvider, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Close as CloseIcon } from "@material-ui/icons";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import "./index.css";
import LandingPage from "./pages/Landing";
import DashboardPage from "./pages/Dashboard";
import TOCPage from "./pages/TOC";
import { isLoggedIn } from "./utils/useAuth";
import PrivateRoute from "./utils/PrivateRoute";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1C9AEA",
    },
  },
  typography: {
    fontFamily: "Metropolis",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

const snackbarBaseStyle = {
  backgroundColor: "white",
  border: "2px solid ",
  borderRadius: "5px",
  fontWeight: "bold",
  fontStyle: "italic",
  flexWrap: "nowrap",
};

const styles = {
  success: {
    ...snackbarBaseStyle,
    borderColor: "#089156",
    color: "#089156",
  },
  info: {
    ...snackbarBaseStyle,
    borderColor: "#1C9AEA",
    color: "#1C9AEA",
  },
  error: {
    ...snackbarBaseStyle,
    borderColor: "#EE4831",
    color: "#EE4831",
  },
  warning: {
    ...snackbarBaseStyle,
    borderColor: "yellow",
    color: "yellow",
  },
};

const notistackRef = React.createRef();

const defaultSnackbarAction = (key) => (
  <IconButton
    onClick={() => {
      notistackRef.current.closeSnackbar(key);
    }}>
    <CloseIcon />
  </IconButton>
);

const App = ({ classes }) => (
  <MuiThemeProvider theme={theme}>
    <SnackbarProvider
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      classes={{
        variantSuccess: classes.success,
        variantInfo: classes.info,
        variantError: classes.error,
        variantWarning: classes.warning,
      }}
      maxSnack={2}
      hideIconVariant
      ref={notistackRef}
      action={(key) => defaultSnackbarAction(key)}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/admin" component={LandingPage} />
          <PrivateRoute exact path="/dashboard" component={DashboardPage} authed={isLoggedIn()} />
          <PrivateRoute exact path="/toc" component={TOCPage} authed={isLoggedIn()} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </SnackbarProvider>
  </MuiThemeProvider>
);

export default withStyles(styles)(App);
