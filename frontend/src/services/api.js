import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const addDesign = (data) => API.post("/", data);

export const getDesigns = () => API.get("/");

export const deleteDesign = (id) => API.delete(`/${id}`);

export const updateStock = (id, stock) =>
  API.put(`/${id}`, { stock });