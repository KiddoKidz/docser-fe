import { render } from "@testing-library/react";
import LoadingInfo from "./index";

test("Error info component exist", () => {
  const { getByTestId } = render(<LoadingInfo />);
  const searchDocument = getByTestId("loading-info");
  expect(searchDocument).toBeInTheDocument();
});
