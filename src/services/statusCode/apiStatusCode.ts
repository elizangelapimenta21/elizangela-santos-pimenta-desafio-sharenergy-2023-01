import axios from "axios";

export const apiCode = axios.create({
    baseURL:  "https://http.cat"
})