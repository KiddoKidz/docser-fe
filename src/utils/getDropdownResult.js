import { getCookieValue } from "./useAuth";
import { OwnerURL, LocationURL } from "./API/URLs/drive";

async function getDropdownResult(param, index) {
  const urlFetch = index === "owner" ? OwnerURL : LocationURL;
  const body = JSON.stringify({
    q: param,
  });

  const token = getCookieValue("token");

  // eslint-disable-next-line no-undef
  const result = await fetch(urlFetch, {
    method: "POST",
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
    body,
  })
    .then((response) => response.json())
    .catch(() => {});

  return result;
}

export default getDropdownResult;
