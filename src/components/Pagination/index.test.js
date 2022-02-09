import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BasicPagination from "./index";

test("Pagination component exists", () => {
  const { getByTestId } = render(<BasicPagination />);
  const pagination = getByTestId("basic-pagination");
  expect(pagination).toBeInTheDocument();
});

test("Pagination clickable", () => {
  const { queryByLabelText } = render(<BasicPagination count={3} setPage={jest.fn()} />);
  const number2 = queryByLabelText("Go to page 2");
  userEvent.click(number2);
  expect(number2).toBeTruthy();
});
