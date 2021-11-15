/* eslint-disable no-unused-vars */
import React from "react";
import Grid from "@material-ui/core/Grid";
import NotFoundIcon from "../../assets/icon/Close.svg";
import { useStyles } from "./styles";

const FileNotFound = ({ filename, filter }) => {
  const classes = useStyles();
  const owner = filter?.owners;
  const dateFrom = new Date(filter?.date?.from);
  const dateTo = new Date(filter?.date?.to);
  const type = filter?.type;
  const locations = filter?.locations;
  return (
    <div className={classes.root} data-testid="file-not-found-component">
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <img
            alt="File Not Found Icon"
            data-testid="file-not-found-icon"
            src={NotFoundIcon}
          />
          <p>
            No results found for{" "}
            <strong data-testid="file-not-found-desc">
              {filename ? `${filename}` : ""}
            </strong>
            <ul className={classes.list}>
              <li>
                Owners: <strong>{owner.toString()}</strong>
              </li>
              <li>
                Locations:<strong> {locations.toString()}</strong>
              </li>
              <li>
                Types:{" "}
                <strong>
                  {type.map((x) => x.split(".").pop()).toString()}
                </strong>
              </li>
              <li>
                Date:{" "}
                <strong>
                  {`${dateFrom.getDate()}/${dateFrom.getMonth()}/${dateFrom.getFullYear()}`}{" "}
                  -{" "}
                  {`${dateTo.getDate()}/${dateTo.getMonth()}/${dateTo.getFullYear()}`}
                </strong>
              </li>
            </ul>
          </p>
          <p data-testid="file-not-found-suggestion">
            Please try one of the following solutions:
          </p>
          <ul className={classes.list}>
            <li>Change filtering</li>
            <li>Use more general words</li>
            <li>Estimated 3 hours for new or changed files</li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};
export default FileNotFound;
