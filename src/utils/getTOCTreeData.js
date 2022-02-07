import { getCookieValue } from "./useAuth";
import { TOCTreeURL } from "./API/URLs/toc";

async function getTOCTreeData() {
  const token = getCookieValue("token");
  // eslint-disable-next-line no-undef
  const result = await fetch(TOCTreeURL, {
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

export default getTOCTreeData;
