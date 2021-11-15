import { render, screen, fireEvent } from "@testing-library/react";
import OwnerInfo from "./index";

test("Owner info component exist", () => {
  const { getByTestId } = render(<OwnerInfo />);
  const ownerInfo = getByTestId("owner-info");
  expect(ownerInfo).toBeInTheDocument();
});

test("Owner info accepts props", () => {
  render(<OwnerInfo owner={["Nadia"]} />);
  const ownerName = screen.getByText("Nadia");
  expect(ownerName).toBeInTheDocument();
});

test("Show file owner info in tooltip", async () => {
  const ownerTooltip = render(<OwnerInfo />);
  fireEvent.mouseOver(ownerTooltip.getByTestId("owner-tooltip"));
  expect(
    await ownerTooltip.findByText("Owner or Shared By")
  ).toBeInTheDocument();
});
