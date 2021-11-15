import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./index";

test("Search bar component exist", () => {
  const { getByTestId } = render(<SearchBar />);
  const searchBar = getByTestId("search-bar");
  expect(searchBar).toBeInTheDocument();
});

test("Search icon component exist", () => {
  const { getByTestId } = render(<SearchBar />);
  const searchIcon = getByTestId("search-icon");
  expect(searchIcon).toBeInTheDocument();
});

test("Search bar placeholder exists", () => {
  render(<SearchBar />);
  const searchBarPlaceholder = screen.getByPlaceholderText(
    "Search for keyword..."
  );
  expect(searchBarPlaceholder).toBeInTheDocument();
});

test("Search bar prevent default when enter", () => {
  const { getByTestId } = render(<SearchBar />);
  const searchBar = getByTestId("search-form");
  userEvent.type(searchBar, "{enter}");
  expect(searchBar).toBeInTheDocument();
});
