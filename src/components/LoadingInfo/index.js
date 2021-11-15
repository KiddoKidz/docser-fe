import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./styles";

function LoadingInfo() {
  const classes = useStyles();

  return (
    <div className={classes.root} data-testid="loading-info">
      <Grid container direction="column" className={classes.item} spacing={1}>
        <Grid item>
          <CircularProgress size={123} />
        </Grid>
        <Grid item>
          <p>Loading...</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoadingInfo;
