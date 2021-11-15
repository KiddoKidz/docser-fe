import React from "react";
import Grid from "@material-ui/core/Grid";
import CreateIcon from "@material-ui/icons/Create";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";

function LastModified({ author, modifiedTime }) {
  const classes = useStyles();
  const options = { year: "numeric", month: "short", day: "numeric" };
  let preposition = "at ";

  const currentDate = new Date();
  const currentDateString = currentDate.toLocaleDateString();
  const modifiedDate = new Date(modifiedTime);
  const modifiedDateString = modifiedDate.toLocaleDateString();
  const yesterday = new Date(currentDate);
  yesterday.setDate(yesterday.getDate() - 1);

  let timeModified = modifiedDate.toLocaleTimeString([], {
    timeStyle: "short",
    hour12: true,
  });

  if (modifiedDateString === yesterday.toLocaleDateString()) {
    preposition = "";
    timeModified = "yesterday";
  } else if (currentDateString !== modifiedDateString) {
    preposition = "on ";
    timeModified = modifiedDate.toLocaleDateString("en-EN", options);
  }

  const modified = preposition.concat(timeModified);

  return (
    <div className={classes.root} data-testid="last-modified">
      <Grid container justify="flex-start" spacing={1}>
        <Typography variant="subtitle1" className={classes.item}>
          <CreateIcon className={classes.icon} />
          Last modified by {author || "N/A"} {modifiedTime ? modified : "N/A"}
        </Typography>
      </Grid>
    </div>
  );
}

export default LastModified;
