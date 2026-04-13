const API_URL = "https://pokeapi.co/api/v2";

export const apiFetch = async (endpoint) => {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("There's an error");
  }

  return response.json();
};
