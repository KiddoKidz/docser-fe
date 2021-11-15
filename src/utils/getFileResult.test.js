import getFileResult from "./getFileResult";

const filter = {
  date: {
    from: 0,
    to: new Date().getTime(),
  },
  owners: [],
  type: [],
  locations: [],
};

it("test getFileResult", async () => {
  const result = await getFileResult("test", filter);
  expect(result).toBeUndefined();
});
