const BACKEND_URL = import.meta.env.PROD
  ? "/api"
  : "http://localhost:5000/";

const WCA_ORIGIN = "https://www.worldcubeassociation.org";

export const backendRequest = (
  path: string,
) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  return fetch(`${BACKEND_URL}${path}`, {
    method: "GET",
    headers: headers,
    redirect: "follow",
  });
};

export const wcaApiRequest = (path: string) => {
  return fetch(`${WCA_ORIGIN}/api/v0/${path}`);
};