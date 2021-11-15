import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TypeFilter from "./index";

const handleFilterValue = jest.fn();
const labels = ["PDFs", "Sheets", "Docs", "Slides"];

test("Type filter label exists", () => {
  render(<TypeFilter handleFilterValue={handleFilterValue} />);
  const typeLabel = screen.getByText("Type");
  expect(typeLabel).toBeInTheDocument();
});

test("Type filter checkbox items exist", () => {
  render(<TypeFilter handleFilterValue={handleFilterValue} />);
  for (let i = 0; i < labels.length; i += 1) {
    const item = screen.getByText(labels[i]);
    expect(item).toBeInTheDocument();
  }
});

test("Unchecked checklist items aren't checked", () => {
  render(<TypeFilter handleFilterValue={handleFilterValue} />);
  for (let i = 0; i < labels.length; i += 1) {
    const item = screen.getByLabelText(labels[i]);
    expect(item.checked).toBe(false);
  }
});

test("Checklist items can be checked", () => {
  render(<TypeFilter handleFilterValue={handleFilterValue} />);
  for (let i = 0; i < labels.length; i += 1) {
    const item = screen.getByLabelText(labels[i]);
    fireEvent.click(item);
    expect(item.checked).toBe(true);
  }
});
