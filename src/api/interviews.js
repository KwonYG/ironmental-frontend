import axios from 'axios';
import { config } from './config.js';

const baseUrl = `${config.reqeustUrl}/interviews`;
const CancelToken = axios.CancelToken;
let cancel;

function fetchInterviews() {
	return axios.get(baseUrl);
}

function fetchInterviewById(id) {
	return axios.get(`${baseUrl}/${id}`);
}

// 검색 기능도 이 메서드로 처리한다.
function fetchSpecificInterviews(tag, searchWord) {
	// 취소 함수가 존재하면 실행
	if (cancel) {
		cancel();
	}
	return axios.get(`${baseUrl}?tag=${tag}&search=${searchWord || ''}`, {
		cancelToken: new CancelToken(function executor(c) {
			// executor 함수가 취소 함수를 받는다.
			cancel = c;
		}),
	});
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
