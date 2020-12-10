import { USER_SIGNIN_API, USER_SIGNUP_API } from '../const/const';

export const signinAction = (email, passWord) => {
	return {
		type: USER_SIGNIN_API,
		userLogin: {
			email: email,
			password: passWord,
		},
	};
};

export const signupAction = (name, email, passWord, phoneNumber) => {
	return {
		type: USER_SIGNUP_API,
		userSignup: {
			name: name,
			email: email,
			passWord: passWord,
			phoneNumber: phoneNumber,
		},
	};
};
