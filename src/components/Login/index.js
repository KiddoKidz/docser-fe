import React from "react";
import { Typography, Box } from "@material-ui/core";
import GoogleIcon from "../../assets/icon/Google.svg";
import { LoginButtonStyled, useStyles } from "./styles";
import { Login, LoginAdmin } from "../../utils/API/URLs/auth";

function LoginButton({ isAdmin }) {
  const classes = useStyles();
  const url = isAdmin ? LoginAdmin : Login;
  return (
    <div>
      <LoginButtonStyled
        data-testid="loginButton"
        onClick={() => window.location.assign(url)}
      >
        <img src={GoogleIcon} alt="Google" height="20px" />
        <Box ml={1}>
          <Typography className={classes.loginText}>
            Login with Google {isAdmin && "as Admin"}
          </Typography>
        </Box>
      </LoginButtonStyled>
    </div>
  );
}

export default LoginButton;
