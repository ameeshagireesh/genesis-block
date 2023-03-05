import axios from "axios";


export const API = axios.create({
    baseURL:  PROCESS.ENV_REACT_APP_BASE_URL,
    responseType: "json",
})

export default API