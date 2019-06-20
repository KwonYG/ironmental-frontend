import axios from 'axios';
import { config } from './config.js';

const baseUrl = `${config.reqeustUrl}sub/`

function postRequestToSub(email){
    return axios.post(`${baseUrl}`, email);
}

export const sub = { 
    postRequestToSub
};