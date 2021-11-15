import { getCookieValue } from "./useAuth";
import { DriveURL } from "./API/URLs/drive";

async function getFileResult(param, filter) {
  const token = getCookieValue("token");
  const body = JSON.stringify({
    q: param,
    start_time: filter.date.from,
    end_time: filter.date.to,
    shared_by: filter.shared_by,
    owners: filter.owners,
    mime_types: filter.type,
    locations: filter.locations,
  });
  // eslint-disable-next-line no-undef
  const result = await fetch(DriveURL, {
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

export default getFileResult;
