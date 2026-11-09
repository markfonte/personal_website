export function isWeddingPath(pathname) {
  return pathname === "/wedding" || pathname === "/ellie" || pathname.startsWith("/ellie/");
}

export function weddingRequest(path, options = {}) {
  return fetch(import.meta.env.VITE_API_URL + "wedding/" + path, {
    credentials: "include",
    ...options,
  });
}

export function weddingPost(path, body) {
  return weddingRequest(path, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}
