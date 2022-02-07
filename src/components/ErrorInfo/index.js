import React from "react";
import Grid from "@material-ui/core/Grid";
import ErrorIcon from "../../assets/icon/error.svg";
import { useStyles } from "./styles";

function ErrorInfo() {
  const classes = useStyles();

  return (
    <div className={classes.root} data-testid="error-info">
      <Grid container direction="column" className={classes.item} spacing={1}>
        <Grid item>
          <img alt="Error Icon" src={ErrorIcon} />
        </Grid>
        <Grid item>
          <p>Error: No data avalaible</p>
          <p>
            Please contact <strong>SIRCLO DocSer</strong> admin if you see this message
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default ErrorInfo;
