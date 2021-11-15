import React from "react";
import { render, screen } from "@testing-library/react";
import { waitFor, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import DocLocationFilter from "./index";
import getDropdownResult from "../../../utils/getDropdownResult";

jest.mock("../../../utils/getDropdownResult", () => jest.fn());

const handleFilterValue = jest.fn();

const data = {
  data: [{ name: "Test Directory" }],
};

test("Document location filter label exists", async () => {
  getDropdownResult.mockImplementation(() => Promise.resolve(data));
  const { getByTestId } = render(
    <DocLocationFilter handleFilterValue={handleFilterValue} />
  );
  const label = getByTestId("label");
  const placeholder = screen.getByPlaceholderText("Search here...");
  await waitFor(() => expect(label).toBeInTheDocument());
  await waitFor(() => expect(placeholder).toBeInTheDocument());
});

test("Document location filter can accept values", async () => {
  getDropdownResult.mockImplementation(() => Promise.resolve(data));
  const { getByTestId } = render(
    <DocLocationFilter handleFilterValue={handleFilterValue} />
  );
  const autocomplete = getByTestId("autocomplete");
  const input = within(autocomplete).getByTestId("textField");
  userEvent.type(input, "Test Directory");
  await waitFor(() =>
    expect(screen.getByText("Test Directory")).toBeInTheDocument()
  );
});

test("Document location result error", async () => {
  getDropdownResult.mockImplementation(() => Promise.reject(data));
  const { getByTestId } = render(
    <DocLocationFilter handleFilterValue={handleFilterValue} />
  );
  const autocomplete = getByTestId("autocomplete");
  const input = within(autocomplete).getByTestId("textField");
  userEvent.type(input, "Test Directory");
  await waitFor(() =>
    expect(screen.getByText("No options")).toBeInTheDocument()
  );
});

test("Document location can choose from dropdown", async () => {
  getDropdownResult.mockImplementation(() => Promise.resolve(data));
  const { getByTestId } = render(
    <DocLocationFilter handleFilterValue={handleFilterValue} />
  );
  const autocomplete = getByTestId("autocomplete");
  const input = within(autocomplete).getByTestId("textField");
  userEvent.type(input, "Test Directory");
  await waitFor(() =>
    expect(screen.getByText("Test Directory")).toBeInTheDocument()
  );
  screen.getByText("Test Directory").click();
});
