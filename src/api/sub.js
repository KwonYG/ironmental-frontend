import axios from 'axios';
import { config } from './config.js';

const baseUrl = `${config.reqeustUrl}/subscribers`;

function postRequestToSub(email) {
	return axios.post(`${baseUrl}`, email);
}

// function RequestCancle(subscriberId){
//   return axios.put(`${baseUrl}`, subscriberId);
// }

export const sub = {
	postRequestToSub,
	// RequestCancle
};
