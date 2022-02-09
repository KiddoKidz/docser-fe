import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./styles";

export default function SearchBar({ value, handleSearchValue, resetSearchValue }) {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} elevation={0} data-testid="search-bar">
      <IconButton className={classes.iconButton} data-testid="search-icon" disabled>
        <SearchIcon />
      </IconButton>

      <InputBase
        data-testid="search-form"
        className={classes.input}
        placeholder="Search for keyword..."
        value={value}
        onChange={(e) => {
          handleSearchValue(e);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
      />

      {value !== "" && (
        <IconButton
          type="reset"
          className={classes.iconButton}
          data-testid="clear-icon"
          onClick={() => {
            resetSearchValue();
          }}>
          <CloseIcon />
        </IconButton>
      )}
    </Paper>
  );
}
