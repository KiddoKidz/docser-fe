import React from "react";
import { Grid, Typography } from "@material-ui/core";
import OwnerIcon from "@material-ui/icons/PersonOutline";
import { useStyles, OwnerToolTip } from "./styles";

export default function OwnerInfo({ owner }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1} data-testid="owner-info" justify="flex-start">
        <OwnerToolTip
          title="Owner or Shared By"
          placement="left"
          arrow
          disableFocusListener
          data-testid="owner-tooltip"
        >
          <OwnerIcon className={classes.icon} />
        </OwnerToolTip>
        <Typography variant="subtitle1" className={classes.item}>
          {owner ? owner[0] : "N/A"}
        </Typography>
      </Grid>
    </div>
  );
}
