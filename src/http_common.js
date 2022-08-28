import axios from "axios";

export const urlBackend = 'https://hologram-it.tk/';
export default axios.create({
    // baseURL: `${urlBackend}`,
    baseURL: "http://localhost:5000/",
    headers:{
        "Content-type":"application/json"
    }
});