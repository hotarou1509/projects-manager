import { call, takeLatest } from 'redux-saga/effects';
import { TOKEN, USER_LOGIN } from '../../utils/const/settingSystem';
import { userService } from '../../services/userService';
import { USER_SIGNIN_API, USER_SIGNUP_API } from '../const/const';

/* SIGN IN */
function* signinSaga(action) {
	try {
		const { data } = yield call(() => userService.signin(action.userLogin));
		console.log(data);
		/* Save token and userInfo to local storage */
		localStorage.setItem(TOKEN, data.content.accessToken);
		localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));
	} catch (err) {
		console.log(err.response.data);
	}
}

export function* watchSignin() {
	yield takeLatest(USER_SIGNIN_API, signinSaga);
}

/* SIGN UP */
function* signupSaga(action) {
	try {
		const { data } = yield call(() =>
			userService.signup(action.userSignup),
		);
		console.log(data);
	} catch (err) {
		console.log(err.response.data);
	}
}

export function* watchSignup() {
	yield takeLatest(USER_SIGNUP_API, signupSaga);
}
