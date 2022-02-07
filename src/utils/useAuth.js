import Cookies from "js-cookie";

const FULL_NAME = "full_name";
const PICTURE_URL = "picture_url";
const IS_ADMIN = "is_admin";
const TOKEN = "token";

export function getCookieValue(name) {
  return Cookies.get(name);
}

export function isLoggedIn() {
  const user = getCookieValue(TOKEN);
  if (user) return true;
  return false;
}

export function getUserInfo() {
  const fullName = localStorage.getItem(FULL_NAME);
  const pictureURL = localStorage.getItem(PICTURE_URL);
  const isAdmin = localStorage.getItem(IS_ADMIN);
  return { fullName, pictureURL, isAdmin };
}

export function removeRelatedWithAuth() {
  Cookies.remove(TOKEN);
  localStorage.removeItem(FULL_NAME);
  localStorage.removeItem(PICTURE_URL);
  localStorage.removeItem(IS_ADMIN);
  setTimeout(() => {
    window.location.reload();
  }, 500);
}
