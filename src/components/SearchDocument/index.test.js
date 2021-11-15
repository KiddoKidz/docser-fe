import { render } from "@testing-library/react";
import SearchDocument from "./index";

test("Search document component exist", () => {
  const { getByTestId } = render(<SearchDocument />);
  const searchDocument = getByTestId("search-document");
  expect(searchDocument).toBeInTheDocument();
});
