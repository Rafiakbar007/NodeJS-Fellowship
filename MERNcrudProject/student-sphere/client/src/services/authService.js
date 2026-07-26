

import api from "./api";

export const signup = (userData) => {
  return api.post("/auth/signup", userData);
};

export const login = (userData) => {
  return api.post("/auth/login", userData);
};

export const logout = () => {
  return api.post("/auth/logout");
};