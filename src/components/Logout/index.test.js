import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LogoutButton from "./index";

test("Logout Button component exist", () => {
  const { getByTestId } = render(<LogoutButton />);
  const button = getByTestId("logout-button");
  expect(button).toBeInTheDocument();
});

test("Logout button call function", () => {
  const { getByTestId } = render(<LogoutButton />);
  const button = getByTestId("logout-button");
  userEvent.click(button);
  expect(button).toBeInTheDocument();
});
