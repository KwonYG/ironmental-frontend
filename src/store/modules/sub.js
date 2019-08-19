import { sub } from '../../api/sub.js';

export const subModule = {
	state: {
		subResult: {
			isSub: false,
			isCertify: false,
			message: '',
			userState: '',
			alertType: '',
		},

		cancleResult: {
			status: '',
			message: '',
			isError: false,
		},
	},

	getters: {
		fetchedSubResult(state) {
			return state.subResult;
		},

		fetchedCancleResult(state) {
			return state.cancleResult;
		},
	},

	mutations: {
		SET_SUB_RESULT(state, subData) {
			if (subData.isSub === true && subData.isCertify === true) {
				subData.userState = '구독 중';
				subData.alertType = 'success';
			} else if (subData.isCertify === false && subData.isSub === true) {
				subData.userState = '미인증 구독자';
				subData.alertType = 'error';
			} else if (subData.isCertify === false) {
				subData.userState = '구독 신청 완료!';
				subData.alertType = 'success';
			}

			state.subResult = subData;
		},

		SET_CANCLE_RESULT(state, cancleResult) {
			state.cancleResult = cancleResult;
		},
	},

	actions: {
		POST_SUBSCRIPTION({ commit }, { email }) {
			return sub
				.postRequestToSub({ email })
				.then(({ data }) => {
					commit('SET_SUB_RESULT', data);
				})
				.catch(err => {});
		},

		CANCLE_SUBSCRIPTION({ commit }, { subscriberId }) {
			return sub
				.RequestCancle({ subscriberId })
				.then(({ data }) => {
					console.log(data);
					commit('SET_CANCLE_RESULT', data);
				})
				.catch(err => {
					commit('SET_CANCLE_RESULT', err.response.data.error);
				});
		},
	},
};
