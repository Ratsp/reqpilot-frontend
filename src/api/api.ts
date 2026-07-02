import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "https://reqpilot.onrender.com",
});


api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    console.log("TOKEN FROM STORAGE:", token);

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("FINAL REQUEST");

    console.log(config.method);
    console.log(config.url);
    console.log(config.headers);

    return config;
});

export default api;