import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Grid, Toolbar, useMediaQuery, useTheme } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Popover from "@material-ui/core/Popover";
import navbarLogo from "../../assets/icon/navbarLogo.svg";
import { Username, useStyles, PictureProfile } from "./styles";
import { Logout } from "..";

const Header = ({ username, picture, action }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <AppBar
      className={classes.appBar}
      style={{ position: "fixed" }}
      data-testid="header"
    >
      <Toolbar variant="dense">
        <IconButton
          onClick={action}
          data-testid="filter-button"
          color="inherit"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>

        <Grid justify="space-between" container alignItems="center">
          <Grid item>
            <img src={navbarLogo} alt="SIRCLO" height="30px" />
          </Grid>
          <Grid item>
            <Grid item container alignItems="center">
              {username && !mobile && (
                <Username data-testid="username">{username}</Username>
              )}

              <IconButton
                color="inherit"
                data-testid="profile-picture"
                onClick={(e) => {
                  setAnchorEl(e.currentTarget);
                }}
              >
                <PictureProfile src={picture} alt="dp" />
              </IconButton>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Logout />
              </Popover>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
