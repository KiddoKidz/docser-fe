import React from "react";
import Grid from "@material-ui/core/Grid";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";

function CreationDate({ date }) {
  const classes = useStyles();
  const options = { year: "numeric", month: "short", day: "numeric" };

  const dateObject = new Date(date);
  const createdDate = dateObject.toLocaleDateString("en-EN", options);
  return (
    <div className={classes.root} data-testid="creation-date">
      <Grid container justify="flex-start" spacing={1}>
        <Typography variant="subtitle1" className={classes.item}>
          <CalendarTodayIcon className={classes.icon} /> Created on{" "}
          {createdDate || "N/A"}
        </Typography>
      </Grid>
    </div>
  );
}

export default CreationDate;
