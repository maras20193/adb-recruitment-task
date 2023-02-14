import { api } from "./apiConfig";

export const getUsers = () => api.get<User[]>("/users");
