import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import LocationBreadcrumb from "./index";

test("Breadcrumb component exist", async () => {
  const testFIleLocation = ["test", "testB", "testC", "testD", "testE"];
  const testFIleLocationLink = {
    test: ["https://linka.com"],
    testB: ["https://linkb.com"],
    testC: ["https://linkc.com"],
    testD: ["https://linkd.com"],
    testE: ["https://linkd.com"],
  };

  const { queryByTestId } = render(
    <LocationBreadcrumb
      location={testFIleLocation}
      locationLink={testFIleLocationLink}
    />
  );

  const typeLabel = screen.getByText("testE");
  fireEvent.click(typeLabel);

  const threeDot = screen.getByText("...");
  fireEvent.mouseEnter(threeDot);
  await waitFor(() => screen.getByText("testB"));
  const testB = screen.getByText("testB");
  fireEvent.click(testB);
  expect(queryByTestId("breadcrumb")).toBeTruthy();
});
