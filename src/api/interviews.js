import axios from 'axios';
import { config } from './config.js';

const baseUrl = `${config.reqeustUrl}/interviews`;

function fetchInterviews() {
	return axios.get(baseUrl);
}

function fetchInterviewById(id) {
	return axios.get(`${baseUrl}/${id}`);
}

// 검색 기능도 이 메서드로 처리한다.
function fetchSpecificInterviews(tag, searchWord) {
	// 현재 백엔드 api 에서 tag가 포함된 상태에서 search 쿼리스트링을 인식 할 수 없음
	console.log(`${baseUrl}?tag=${tag}&search=${searchWord || ''}`);
	return axios.get(`${baseUrl}?tag=${tag}&search=${searchWord || ''}`);
}

function fetchMoreInterviews(nextUrl) {
	return axios.get(nextUrl);
}

export const interview = {
	fetchInterviews,
	fetchInterviewById,
	fetchMoreInterviews,
	fetchSpecificInterviews,
};
