const { default: axios } = require("axios");

const apikey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiURL = "http://localhost:1337/api";
const axiosClient = axios.create({
  baseURL: apiURL,
  headers: {
    Authorization: `Bearer ${apikey}`,
  },
});

export default axiosClient;
