import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useLocation, Redirect } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { Login } from "../../components";
import driveImg from "../../assets/icon/driveIcon.svg";
import sircloImg from "../../assets/icon/sircloWhite.svg";
import { GetUser } from "../../utils/API/URLs/auth";
import { getCookieValue } from "../../utils/useAuth";

export default function LandingPage() {
  const [token, setToken] = useState(null);
  const classes = useStyles();
  const query = new URLSearchParams(useLocation().search).get("token");
  const isAdmin = useLocation().pathname === "/admin";

  useEffect(() => {
    const loginToken = query || getCookieValue("token");
    axios({
      method: "get",
      url: `${GetUser}`,
      headers: {
        Authorization: `Token ${loginToken}`,
      },
    })
      .then((res) => {
        localStorage.setItem("full_name", res.data.full_name);
        localStorage.setItem("picture_url", res.data.picture_url);
        localStorage.setItem("is_admin", res.data.is_admin);
        setToken(loginToken);
      })
      .catch(() => {});
  }, [query]);

  useEffect(() => {
    if (token) {
      Cookies.set("token", token, { expires: 1 });
      window.location.reload();
    }
  }, [token]);

  return (
    <>
      {!token ? (
        <div className={classes.root} data-testid="landing-page">
          <Grid className={classes.container}>
            <img src={sircloImg} alt="drive_img" className={classes.titleHeader} />
            <Typography className={classes.title}>
              <strong>Document Search {isAdmin && "Admin"}</strong>
            </Typography>
            <img src={driveImg} alt="drive_img" className={classes.image} />
            <Login isAdmin={isAdmin} />
          </Grid>
        </div>
      ) : (
        <Redirect to="/dashboard" />
      )}
    </>
  );
}
