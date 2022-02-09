import { getCookieValue } from "./useAuth";
import { TOCDataUploadURL } from "./API/URLs/toc";

async function updateTOCData(file) {
  const token = getCookieValue("token");

  const formData = new FormData();
  formData.append("file", file, file.name);

  // eslint-disable-next-line no-undef
  const result = await fetch(TOCDataUploadURL, {
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

export default updateTOCData;
