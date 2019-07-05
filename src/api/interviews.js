import axios from 'axios';
import { config } from './config.js';

const baseUrl = `${config.reqeustUrl}/interviews`

function fetchInterviews(){
    return axios.get(baseUrl);
}

function fetchInterviewById(id){
    return axios.get(`${baseUrl}/${id}`);
}

function fetchSpecificInterviews(tag){
    return axios.get(`${baseUrl}?tag=${tag}`);
}

function fetchMoreInterviews(nextUrl){ // call next by hateoas
    return axios.get(nextUrl);
}

export const interview = { 
    fetchInterviews,
    fetchInterviewById,
    fetchMoreInterviews,
    fetchSpecificInterviews
};