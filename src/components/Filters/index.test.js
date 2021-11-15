import React from "react";
import { render } from "@testing-library/react";
import FilterBar from "./index";

test("Filter bar hidden", () => {
  const { queryByTestId } = render(<FilterBar opened />);
  const filterBar = queryByTestId("filterBar");
  expect(filterBar).toBeInTheDocument();
});
