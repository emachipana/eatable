import { token_key } from "../config";
import apiFetch from "./api-fetch";

export async function login(credentials) {
  const { token, ...user } = await apiFetch("login", { body: credentials });

  sessionStorage.setItem(token_key, token);
  return user;
}

export async function logout() {
  await apiFetch("logout", { method: "DELETE" });
  sessionStorage.removeItem(token_key);
}
