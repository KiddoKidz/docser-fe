import React from "react";
import { render, screen } from "@testing-library/react";
import { waitFor, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import OwnerFilter from "./index";
import getDropdownResult from "../../../utils/getDropdownResult";

jest.mock("../../../utils/getDropdownResult", () => jest.fn());

const handleFilterValue = jest.fn();

const data = {
  data: [{ name: "Test User", email: "test@test.com" }],
};

test("Owner filter label and placeholder exists", async () => {
  getDropdownResult.mockImplementation(() => Promise.resolve(data));
  render(<OwnerFilter handleFilterValue={handleFilterValue} />);
  const ownerLabel = screen.getByText("Owner / Shared By");
  const ownerPlaceholder = screen.getByPlaceholderText("Search for person...");
  await waitFor(() => expect(ownerLabel).toBeInTheDocument());
  await waitFor(() => expect(ownerPlaceholder).toBeInTheDocument());
});

test("Owner filter can accept values", async () => {
  getDropdownResult.mockImplementation(() => Promise.resolve(data));
  const { getByTestId } = render(
    <OwnerFilter handleFilterValue={handleFilterValue} />
  );
  const autocomplete = getByTestId("autocomplete");
  const input = within(autocomplete).getByTestId("textField");
  userEvent.type(input, "Test User");
  await waitFor(() =>
    expect(screen.getByText("Test User - test@test.com")).toBeInTheDocument()
  );
});

test("Owner result error", async () => {
  getDropdownResult.mockImplementation(() => Promise.reject(data));
  const { getByTestId } = render(
    <OwnerFilter handleFilterValue={handleFilterValue} />
  );
  const autocomplete = getByTestId("autocomplete");
  const input = within(autocomplete).getByTestId("textField");
  userEvent.type(input, "Test Directory");
  await waitFor(() =>
    expect(screen.getByText("No options")).toBeInTheDocument()
  );
});

test("Owner filter can choose from dropdown", async () => {
  getDropdownResult.mockImplementation(() => Promise.resolve(data));
  const { getByTestId } = render(
    <OwnerFilter handleFilterValue={handleFilterValue} />
  );
  const autocomplete = getByTestId("autocomplete");
  const input = within(autocomplete).getByTestId("textField");
  userEvent.type(input, "Test User");
  await waitFor(() =>
    expect(screen.getByText("Test User - test@test.com")).toBeInTheDocument()
  );
  screen.getByText("Test User - test@test.com").click();
});
