import { apiFetch } from "./api.js";

export const getKantoPokemos = () => {
  return apiFetch("/pokemon?limit=20");
};

export const getPokemonDetail = (id) => {
  return apiFetch(`/pokemon/${id}`);
};
