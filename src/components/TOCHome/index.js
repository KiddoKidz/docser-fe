import React from "react";
import { Box, Grid, Typography, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import { LogoContainer } from "./style";
import Item from "./Item";

import TOCDocumentationIcon from "../../assets/icon/TOCDocumentation.svg";

const HeaderContainer = withStyles({
  root: {
    padding: "3em 0px",
  },
})(Box);

export default function TOCHome({ items }) {
  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      <Grid container item spacing={3} xs={12}>
        <Grid item xs={4}>
          <LogoContainer>
            <img style={{ width: "50%" }} src={TOCDocumentationIcon} alt="TOCDcumentationIcon" />
          </LogoContainer>
        </Grid>
        <Grid item xs={8}>
          <HeaderContainer>
            <Typography variant="h4">
              <strong>Documentation</strong>
            </Typography>
            <Typography variant="body1">
              SIRCLO Document Search Platform, here you will find all the information you need
              regarding our Document at{" "}
              <Link href="https://drive.google.com/drive/u/1/folders/1MCzINwfN25sKVkU6Byl7EIX1VRZGWeYH">
                Tech Docs
              </Link>{" "}
            </Typography>
          </HeaderContainer>
        </Grid>
      </Grid>
      <Grid container item spacing={3} xs={12}>
        {items?.map((el) => (
          <Item data={el} />
        ))}
      </Grid>
    </Grid>
  );
}
