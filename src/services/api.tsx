import axios from "axios";

const api = axios.create({
    baseURL: "https://backend-clinic-hub.vercel.app",
});

export default api;