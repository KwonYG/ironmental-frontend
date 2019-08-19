import axios from 'axios';
import { config } from './config.js';

const baseUrl = `${config.reqeustUrl}/tags`;

function fetchTags() {
	return axios.get(baseUrl);
}

export const tags = {
	fetchTags,
};
