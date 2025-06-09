// src/services/authService.js

import axios from "axios";

const API_URL = "http://localhost:8082/api/auth";

export const signup = (userData) => {
    return axios.post(`${API_URL}/signup`, userData);
};

export const signin = (formData) => {
    console.log("Login form submitted:", formData);
    return axios.post("http://localhost:8082/api/auth/signin", formData, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    });
};

export const signout = () => {
    localStorage.removeItem("token");
};
