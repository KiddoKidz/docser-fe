import { getCookieValue, isLoggedIn } from "./useAuth";

test("cookie not found", () => {
  expect(getCookieValue("token")).toEqual(undefined);
});

test("cookie exist", () => {
  document.cookie = `token=test; expires=test`;
  expect(getCookieValue("token")).toEqual("test");
});

test("user exist", () => {
  document.cookie = `token=test; expires=test`;
  expect(isLoggedIn()).toBeTruthy();
});
