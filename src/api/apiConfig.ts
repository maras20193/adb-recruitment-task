import axios from "axios";
import { config } from "../config";

const apiConfig = {
  baseURL: config.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const api = axios.create(apiConfig);
