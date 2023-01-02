import axios from "axios";

const api = axios.create({
 baseURL: "cashforce-back.fly.dev",
});

export default api