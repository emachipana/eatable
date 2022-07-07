import apiFetch from "./api-fetch";

export async function getOrders() {
  return await apiFetch("orders");
}

export async function createOrder(newOrder) {
  return await apiFetch("orders", { body: newOrder });
}
