import { getCookieValue } from "./useAuth";
import { TOCHomepageURL } from "./API/URLs/toc";

async function updateTOCHomepageData(file) {
  const token = getCookieValue("token");

  const formData = new FormData();
  formData.append("file", file, file.name);

  // eslint-disable-next-line no-undef
  const result = await fetch(TOCHomepageURL, {
    method: "POST",
    headers: {
      Authorization: `Token ${token}`,
    },
    body: formData,
  })
    .then((response) => response.json())
    .catch(() => {});
  return result;
}

export default updateTOCHomepageData;
