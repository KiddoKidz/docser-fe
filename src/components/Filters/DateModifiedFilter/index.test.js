import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DateModifiedFilter from "./index";

const radioLabels = [
  "Any date",
  "Last 24 hours",
  "Last week",
  "Last month",
  "Last year",
  "Custom",
];

const handleFilterValue = jest.fn();

test("Date modified filter label exists", () => {
  render(<DateModifiedFilter handleFilterValue={handleFilterValue} />);
  const dateModifiedLabel = screen.getByText("Date Modified");
  expect(dateModifiedLabel).toBeInTheDocument();
});

test("Radio items exist", () => {
  render(<DateModifiedFilter handleFilterValue={handleFilterValue} />);
  for (let i = 0; i < radioLabels.length; i += 1) {
    const radioItem = screen.getByLabelText(radioLabels[i]);
    expect(radioItem).toBeInTheDocument();
  }
});

test("Radio item can be checked", () => {
  render(<DateModifiedFilter handleFilterValue={handleFilterValue} />);
  const checkedItem = screen.getByLabelText("Any date");
  fireEvent.click(checkedItem);
  expect(checkedItem.checked).toBe(true);
  for (let i = 1; i < radioLabels.length; i += 1) {
    const uncheckedItem = screen.getByLabelText(radioLabels[i]);
    expect(uncheckedItem.checked).toBe(false);
  }
});

test("All Radio clickable", () => {
  render(<DateModifiedFilter handleFilterValue={handleFilterValue} />);
  for (let i = 1; i < radioLabels.length; i += 1) {
    const checkedItem = screen.getByLabelText(radioLabels[i]);
    fireEvent.click(checkedItem);
    expect(checkedItem.checked).toBe(true);
  }
  const anyDate = screen.getByLabelText(radioLabels[0]);
  fireEvent.click(anyDate);
  expect(anyDate.checked).toBe(true);
});

test("From date input exists", () => {
  render(<DateModifiedFilter handleFilterValue={handleFilterValue} />);
  const fromDateInput = screen.getByPlaceholderText("Search for start date...");
  expect(fromDateInput).toBeInTheDocument();
});

test("To date input exists", () => {
  render(<DateModifiedFilter handleFilterValue={handleFilterValue} />);
  const toDateInput = screen.getByPlaceholderText("Search for end date...");
  expect(toDateInput).toBeInTheDocument();
});

test("From date can be chosen", () => {
  render(<DateModifiedFilter handleFilterValue={handleFilterValue} />);
  const checkedItem = screen.getByLabelText("Custom");
  fireEvent.click(checkedItem);
  const fromDateInput = screen.getByPlaceholderText("Search for start date...");
  fireEvent.mouseDown(fromDateInput);
  fireEvent.change(fromDateInput, { target: { value: "10-12-2020" } });
  expect(fromDateInput).toHaveValue("10/12/2020");
});

test("To date can be chosen", () => {
  render(<DateModifiedFilter handleFilterValue={handleFilterValue} />);
  const checkedItem = screen.getByLabelText("Custom");
  fireEvent.click(checkedItem);
  const fromDateInput = screen.getByPlaceholderText("Search for end date...");
  fireEvent.mouseDown(fromDateInput);
  fireEvent.change(fromDateInput, { target: { value: "10-12-2020" } });
  expect(fromDateInput).toHaveValue("10/12/2020");
});
