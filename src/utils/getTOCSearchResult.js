import { getCookieValue } from "./useAuth";
import { TOCSearchURL } from "./API/URLs/toc";

async function getTOCSearchResult(param) {
  const token = getCookieValue("token");
  const body = JSON.stringify({
    q: param,
  });
  // eslint-disable-next-line no-undef
  const result = await fetch(TOCSearchURL, {
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

export default getTOCSearchResult;
