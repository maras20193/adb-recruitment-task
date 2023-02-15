import { api } from "./apiConfig";

export const getUsers = () => api.get<User[]>("/users");

export const deleteUser = (userId: number) => api.delete(`/users/${userId}`);

export const addUser = (data: any) => api.post(`/users/`, { data });

export const editUser = (data: any, userId: number) =>
  api.put(`/users/${userId}`, { data });
