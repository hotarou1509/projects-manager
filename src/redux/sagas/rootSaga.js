import { all } from 'redux-saga/effects';
import * as User from './UserSaga';

export function* rootSaga() {
	yield all([
		/* User Authorization */
		User.watchSignin(),
		User.watchSignup(),
	]);
}
