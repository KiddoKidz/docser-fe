import React, { useState, useEffect } from "react";
import { Grid, Breadcrumbs, Typography, Box } from "@material-ui/core";
import { useStyles, LightTooltip, ThreeDot } from "./styles";
import fileIcon from "../../../assets/icon/folders.svg";

export default function LocationBreadcrumb({ location, locationLink }) {
  const classes = useStyles();
  const [lengthExceeded, setLengthExceeded] = useState(false);
  const [arrayQueried, setArrayQueried] = useState([]);

  useEffect(() => {
    if (location.length > 4) {
      setLengthExceeded(true);
      const expandedQuery = [...location];
      setArrayQueried(expandedQuery.slice(1, -2));
    }
  }, [location]);

  return (
    <>
      {lengthExceeded ? (
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          className={classes.breadcrumbs}
          data-testid="breadcrumb"
        >
          <Typography color="inherit" className={classes.locationUnknown}>
            {location[0]}
          </Typography>
          <LightTooltip
            disableFocusListener
            interactive
            title={
              <>
                {arrayQueried.map((items, index) => (
                  <Box ml={index * 1} key={`lff${items}`}>
                    <Typography color="inherit" className={classes.popup}>
                      <Grid
                        item
                        className={classes.heading}
                        onClick={() =>
                          window.open(locationLink[items].shift(), "_blank")
                        }
                      >
                        <img
                          src={fileIcon}
                          alt="fileIcon"
                          className={classes.img}
                        />
                        {items}
                      </Grid>
                    </Typography>
                  </Box>
                ))}
              </>
            }
            placement="bottom-start"
          >
            <ThreeDot>...</ThreeDot>
          </LightTooltip>
          <Typography
            color="inherit"
            className={classes.location}
            onClick={() =>
              window.open(
                locationLink[location[location.length - 2]].shift(),
                "_blank"
              )
            }
          >
            {location[location.length - 2]}
          </Typography>
          <Typography
            color="inherit"
            className={classes.location}
            onClick={() =>
              window.open(
                locationLink[location[location.length - 1]].shift(),
                "_blank"
              )
            }
          >
            {location[location.length - 1]}
          </Typography>
        </Breadcrumbs>
      ) : (
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          className={classes.breadcrumbs}
          data-testid="breadcrumb"
        >
          {location.map((items, index) => (
            <Typography
              color="inherit"
              className={
                index === 0 ? classes.locationUnknown : classes.location
              }
              key={`lf${items}`}
              onClick={() => {
                if (index !== 0)
                  window.open(locationLink[items].shift(), "_blank");
              }}
            >
              {items}
            </Typography>
          ))}
        </Breadcrumbs>
      )}
    </>
  );
}
