import { getCookieValue } from "./useAuth";
import { TOCHomepageURL } from "./API/URLs/toc";

async function getTOCHomepageData() {
  const token = getCookieValue("token");
  // eslint-disable-next-line no-undef
  const result = await fetch(TOCHomepageURL, {
    method: "GET",
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch(() => {});

  return result;
}

export default getTOCHomepageData;
