import Cookies from "js-cookie";

const FULL_NAME = "full_name";
const PICTURE_URL = "picture_url";
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
  return { fullName, pictureURL };
}

export function removeRelatedWithAuth() {
  Cookies.remove(TOKEN);
  localStorage.removeItem(FULL_NAME);
  localStorage.removeItem(PICTURE_URL);
  setTimeout(() => {
    window.location.reload();
  }, 500);
}
