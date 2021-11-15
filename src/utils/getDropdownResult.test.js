import getDropdownResult from "./getDropdownResult";

it("test getDropdownResult", async () => {
  const result = await getDropdownResult("test", "owner");
  expect(result).toBeUndefined();
});
