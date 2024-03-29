const axios = require("axios");

const apikey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiURL = "https://fayrouzkhan.onrender.com/api";
const axiosClient = axios.create({
  baseURL: apiURL,
  headers: {
    Authorization: `Bearer ${apikey}`,
    Accept: "application/json, text/plain, */*",
  },
});

module.exports = axiosClient;
