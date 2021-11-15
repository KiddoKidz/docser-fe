/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/Landing";
import DashboardPage from "./pages/Dashboard";
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

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/admin" component={LandingPage} />
        <PrivateRoute
          exact
          path="/dashboard"
          component={DashboardPage}
          authed={isLoggedIn()}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

export default App;
