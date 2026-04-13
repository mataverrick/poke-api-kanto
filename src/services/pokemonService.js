import { apiFetch } from "./api.js";

export const getKantoPokemos = ()=>{
    return apiFetch('/pokemon?limit=5')
} 