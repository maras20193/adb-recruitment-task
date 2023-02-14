import { api } from "./apiConfig";

export const getPosts = () => api.get<Post[]>("/posts");
