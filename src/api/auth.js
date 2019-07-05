import axios from "axios";
import { config } from "./config.js";

const baseUrl = `${config.reqeustUrl}/auth/confirm`;

function RequestToAuth(requestBody) {
  return axios.post(`${baseUrl}`, requestBody);
}

export const auth = {
  RequestToAuth
};
