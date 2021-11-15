import React from "react";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "../../assets/icon/Search.svg";
import { useStyles } from "./styles";

function SearchDocument() {
  const classes = useStyles();

  return (
    <div className={classes.root} data-testid="search-document">
      <Grid container direction="column" className={classes.item} spacing={1}>
        <Grid item>
          <img alt="Search Icon" src={SearchIcon} />
        </Grid>
        <Grid item>
          <p>Search your documents</p>
          <p>Refine your search using the filters on the left</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchDocument;
