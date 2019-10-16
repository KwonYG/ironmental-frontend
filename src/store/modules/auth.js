import { auth } from '../../api/auth.js';

export const authModule = {
	state: {
		authResult: {
			title: '',
			message: '',
			isError: false,
		},
	},

	getters: {
		fetchedAuthResult(state) {
			return state.authResult;
		},
	},

	mutations: {
		SET_AUTH_RESULT(state, statusCode) {
			const authResult = {};

			if (statusCode === 200) {
				authResult.title = '인증이 완료되었습니다!';
				authResult.message =
					'매주 월요일 이메일을 통해 개발 키워드를 보내드립니다.';
				authResult.isError = false;
			} else if (statusCode === 400) {
				// 형식이 잘못된 인증코드
				authResult.title = statusCode;
				authResult.message = '잘못된 인증코드입니다.';
				authResult.isError = true;
			} else if (statusCode === 404) {
				// 형식은 맞지만 구독신청이 안되어있는 경우
				authResult.title = statusCode;
				authResult.message = '잘못된 인증코드입니다.';
				authResult.isError = true;
			} else if (statusCode === 500) {
				// 서버오류
				authResult.title = '서버 오류';
				authResult.message =
					'개발자의 멘탈이 나간 상태입니다. 조금만 기다려주세요.';
				authResult.isError = true;
			}

			state.authResult = authResult;
		},
	},

	actions: {
		REQUEST_AUTH({ commit }, { subscriberId }) {
			return auth
				.RequestToAuth({ subscriberId })
				.then(res => {
					const statusCode = res.status;
					commit('SET_AUTH_RESULT', statusCode);
				})
				.catch(err => {
					const statusCode = err.response.status;
					commit('SET_AUTH_RESULT', statusCode);
				});
		},
	},
};
