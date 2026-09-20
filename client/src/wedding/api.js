export function isWeddingPath(pathname) {
  return pathname === "/wedding" || pathname === "/ellie" || pathname.startsWith("/ellie/");
}

export function weddingRequest(path, options = {}) {
  return fetch(import.meta.env.VITE_API_URL + "wedding/" + path, {
    credentials: "include",
    ...options,
  });
}
