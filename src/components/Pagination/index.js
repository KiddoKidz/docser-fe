import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { useStyles } from "./styles";

export default function BasicPagination({ count, setPage }) {
  const classes = useStyles();

  const handleChange = (_event, value) => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Pagination
        count={count}
        siblingCount={1}
        data-testid="basic-pagination"
        onChange={handleChange}
      />
    </div>
  );
}
