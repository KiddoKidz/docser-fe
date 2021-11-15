import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./index";

test("Header component exist", () => {
  const { queryByTestId } = render(<Header />);
  const linkElement = queryByTestId("header");
  expect(linkElement).toBeInTheDocument();
});

test("Profile picture clickable", () => {
  const { getByTestId } = render(<Header />);
  const profilePicture = getByTestId("profile-picture");
  userEvent.click(profilePicture);
  expect(profilePicture).toBeEnabled();
});
