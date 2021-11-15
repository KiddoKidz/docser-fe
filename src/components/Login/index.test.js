import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginButton from "./index";

delete window.location;
window.location = { assign: jest.fn() };

test("Login Button component exist", () => {
  const { getByTestId } = render(<LoginButton />);
  const button = getByTestId("loginButton");
  expect(button).toBeInTheDocument();
});

test("Login Button click", () => {
  const { getByTestId } = render(<LoginButton />);
  const button = getByTestId("loginButton");
  userEvent.click(button);
  expect(button).toBeTruthy();
});
