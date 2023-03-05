import axios from "axios";

export const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
    responseType: "json",
})

export default API