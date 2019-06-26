import axios from 'axios';
import { config } from './config.js';

const baseUrl = `${config.reqeustUrl}auth/confirm/`

function RequestToAuth(confirmCode){
    const requestBody = { 
        confirmCode,
    }; 
    return axios.post(`${baseUrl}`, requestBody);
}

export const sub = { 
    RequestToAuth
};