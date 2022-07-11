import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:37568/",
    headers:{
        "Content-type":"application/json"
    }
});