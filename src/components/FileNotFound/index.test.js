import { render, screen } from "@testing-library/react";
import FileNotFound from "./index";

const filter = {
  date: {
    from: 0,
    to: new Date().getTime(),
  },
  owners: ["test"],
  type: ["test"],
  locations: ["test"],
};

test("File not found component exists", () => {
  const { getByTestId } = render(<FileNotFound filter={filter} />);
  const fileNotFound = getByTestId("file-not-found-component");
  expect(fileNotFound).toBeInTheDocument();
});

test("File not found icon exists", () => {
  const { getByTestId } = render(<FileNotFound filter={filter} />);
  const fileNotFound = getByTestId("file-not-found-icon");
  expect(fileNotFound).toBeInTheDocument();
});

test("File not found DescriptionOutlined exists", () => {
  const { getByTestId } = render(<FileNotFound filter={filter} />);
  const fileNotFound = getByTestId("file-not-found-desc");
  expect(fileNotFound).toBeInTheDocument();
});

test("File not found suggestion exists", () => {
  const { getByTestId } = render(<FileNotFound filter={filter} />);
  const fileNotFound = getByTestId("file-not-found-suggestion");
  expect(fileNotFound).toBeInTheDocument();
});

test("File name parameter filled", () => {
  render(<FileNotFound filename="File A" filter={filter} />);
  const linkElement = screen.getByText(/File A/i);
  expect(linkElement).toBeInTheDocument();
});
