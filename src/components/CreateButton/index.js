import React from "react";
import { Typography, Grid, Divider } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {
  StyledCreateButton,
  StyledMenu,
  StyledMenuItem,
  useStyles,
} from "./styles";
import { BlankDocURL, TemplateDocURL } from "../../utils/API/URLs/createDoc";

function CreateButton() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledCreateButton data-testid="create-button" onClick={handleClick}>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={8}>
            <Typography className={classes.buttonText}>Create</Typography>
          </Grid>
          <Grid item xs={1}>
            <Divider className={classes.divider} orientation="vertical" />
          </Grid>
          <Grid item xs={2}>
            <ArrowDropDownIcon className={classes.icon} />
          </Grid>
        </Grid>
      </StyledCreateButton>
      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        data-testid="dropdown-menu"
      >
        <StyledMenuItem
          data-testid="menu-item-blank"
          onClick={() => window.open(BlankDocURL, "_blank")}
        >
          Blank Document
        </StyledMenuItem>
        <StyledMenuItem
          data-testid="menu-item-template"
          onClick={() => window.open(TemplateDocURL, "_blank")}
        >
          From Template
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

export default CreateButton;
