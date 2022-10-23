import axios from "axios";
import https from "https";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  httpsAgent: new https.Agent({ keepAlive: true }),
});

export default pokeApi;
