import { render, screen } from "@testing-library/react";
import CreationDate from "./index";

test("CreationDate component exists", () => {
  const { getByTestId } = render(<CreationDate />);
  const creationDate = getByTestId("creation-date");
  expect(creationDate).toBeInTheDocument();
});

test("CreationDate is able to convert millisecond to human date Format", () => {
  render(<CreationDate date={1609761730398} />);
  const creationDate = screen.getByText("Jan", { exact: false });
  expect(creationDate).toBeInTheDocument();
});
