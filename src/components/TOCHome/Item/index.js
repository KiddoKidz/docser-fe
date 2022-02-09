import React from "react";
import { DescriptionOutlined as DescriptionOutlinedIcon } from "@material-ui/icons";
import { Box, Grid, Paper, Typography, Link, withStyles } from "@material-ui/core";
import { LogoContainer } from "../style";

export const ItemDataContainer = withStyles({
  root: {
    margin: "5px 0px 0px",
  },
})(Box);

export default function Item({ data }) {
  return (
    <Grid item md={6} xs={12}>
      <Paper elevation={3}>
        <Box p={2}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <LogoContainer>
                {data?.icon_url && <img src={data.icon_url} alt="icon_url" />}
              </LogoContainer>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h5">
                <strong>{data.category}</strong>
              </Typography>
              <Typography variant="subtitle2">{data.description}</Typography>
              {data.data.map((el) => {
                if (!el.title) {
                  return null;
                }
                return (
                  <ItemDataContainer display="flex" alignItems="center">
                    <DescriptionOutlinedIcon color="disabled" />
                    <Link href={el.url}>{el.title}</Link>
                  </ItemDataContainer>
                );
              })}
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
}
