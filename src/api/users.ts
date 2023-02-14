import { api } from "./apiConfig";

export const getUsers = () => api.get<User[]>("/users");

export const deleteUser = (userId: number) => api.delete(`/users/${userId}`);
