import { apiFetch } from "./api.js";

export const getKantoPokemos = (limit,offset) => {
  return apiFetch(`/pokemon?limit=${limit}&offset=${offset}`);
};

