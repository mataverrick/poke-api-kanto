import { apiFetch } from "./api.js";

export const getKantoPokemos = () => {
  return apiFetch("/pokemon?limit=5");
};

export const getPokemonDetail = (id) => {
  return apiFetch(`/pokemon/${id}`);
};
