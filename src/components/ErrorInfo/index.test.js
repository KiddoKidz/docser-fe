import { render } from "@testing-library/react";
import ErrorInfo from "./index";

test("Error info component exist", () => {
  const { getByTestId } = render(<ErrorInfo />);
  const searchDocument = getByTestId("error-info");
  expect(searchDocument).toBeInTheDocument();
});
