import React from "react";
import {
  Box,
  Toolbar,
  Divider,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { StyledDrawer } from "./style";
import TypeFilter from "./TypeFilter";
import OwnerFilter from "./OwnerFilter";
import DocLocationFilter from "./DocLocationFilter";
import CreateButton from "../CreateButton";
import DateModifiedFilter from "./DateModifiedFilter";

export default function FilterBar({ opened, action, handleFilterValue }) {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <div>
      <StyledDrawer
        data-testid="filterBar"
        variant={!mobile ? "persistent" : "temporary"}
        open={!mobile || opened}
        onOpen={action}
        onClose={action}
        swipeAreaWidth={70}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <Toolbar />
        <Box margin="40px 35px 5px">
          <CreateButton />
        </Box>
        <Box margin="30px 35px 15px">
          <span style={{ fontSize: 18 }}>FILTER BY</span>
        </Box>
        <OwnerFilter handleFilterValue={handleFilterValue} />
        <Divider variant="middle" />
        <DocLocationFilter handleFilterValue={handleFilterValue} />
        <Divider variant="middle" />
        <TypeFilter handleFilterValue={handleFilterValue} />
        <Divider variant="middle" />
        <DateModifiedFilter handleFilterValue={handleFilterValue} />
        <Toolbar />
      </StyledDrawer>
    </div>
  );
}
