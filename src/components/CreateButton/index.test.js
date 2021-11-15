import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CreateButton from "./index";

test("Create button exists", () => {
  const { getByTestId } = render(<CreateButton />);
  const button = getByTestId("create-button");
  expect(button).toBeInTheDocument();
});

test("Menu not visible before button is clicked", () => {
  const { queryByTestId } = render(<CreateButton />);
  const menu = queryByTestId("dropdown-menu");
  const menuItem = queryByTestId("menu-item-blank");
  expect(menu).not.toBeInTheDocument();
  expect(menuItem).not.toBeInTheDocument();
});

test("Menu visible after button is clicked", () => {
  const { getByTestId } = render(<CreateButton />);
  const button = getByTestId("create-button");
  fireEvent.click(button);
  const menu = getByTestId("dropdown-menu");
  const menuItem = getByTestId("menu-item-blank");
  expect(menu).toBeInTheDocument();
  expect(menuItem).toBeInTheDocument();
});

test("Click new button", () => {
  const { getByTestId } = render(<CreateButton />);
  const button = getByTestId("create-button");
  fireEvent.click(button);
  const menuItem = getByTestId("menu-item-blank");
  fireEvent.click(menuItem);
  expect(menuItem).toBeTruthy();
});

test("Click template button", () => {
  const { getByTestId } = render(<CreateButton />);
  const button = getByTestId("create-button");
  fireEvent.click(button);
  const menuItem = getByTestId("menu-item-template");
  fireEvent.click(menuItem);
  expect(menuItem).toBeTruthy();
});
