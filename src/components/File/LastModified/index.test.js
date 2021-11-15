import { render, screen } from "@testing-library/react";
import LastModified from "./index";

test("Last Modified component exists", () => {
  const { getByTestId } = render(<LastModified />);
  const lastModified = getByTestId("last-modified");
  expect(lastModified).toBeInTheDocument();
});

test("Last Modified Info is able to display modified time", () => {
  const currentDate = new Date();
  render(<LastModified author="User Modify" modifiedTime={currentDate} />);
  const lastModifiedInfo = screen.getByText("Last modified by User Modify at", {
    exact: false,
  });
  expect(lastModifiedInfo).toBeInTheDocument();
});

test("Last modified info is able to display modified date", () => {
  render(<LastModified author="User Modify" modifiedTime={1611667088811} />);
  const lastModifiedInfo = screen.getByText(
    "Last modified by User Modify on Jan 26, 2021"
  );
  expect(lastModifiedInfo).toBeInTheDocument();
});

test("Last modified info is able to display modified date if it was modified yesterday", () => {
  const currentDate = new Date();
  const yesterday = new Date(currentDate);
  yesterday.setDate(yesterday.getDate() - 1);

  render(<LastModified author="User Modify" modifiedTime={yesterday} />);
  const lastModifiedInfo = screen.getByText(
    "Last modified by User Modify yesterday"
  );
  expect(lastModifiedInfo).toBeInTheDocument();
});
