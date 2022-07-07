import { token_key } from "../config";
import apiFetch from "./api-fetch";

export async function getUser() {
  const { _token, ...user } = await apiFetch("profile");

  return user;
}

export async function createUser(newUser) {
  const { token, ...user } = await apiFetch("users", { body: newUser });

  sessionStorage.setItem(token_key, token)
  return user;
}

export async function updateUser(payload) {
  const { _token, ...user } = await apiFetch("profile", { body: payload, method: "PATCH" });

  return user;
}

