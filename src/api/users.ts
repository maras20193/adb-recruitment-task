import { api } from "./apiConfig";

export const getUsers = () => api.get<User[]>("/users");

export const deleteUser = (userId: number) => api.delete(`/users/${userId}`);

export const addUser = (data: MockAddUserData) => api.post(`/users/`, { data });

export const editUser = (data: User, userId: number) =>
  api.put(`/users/${userId}`, { data });
