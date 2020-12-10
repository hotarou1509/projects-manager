import { baseService } from './baseService';

export class UserService extends baseService {
	signin = (userLogin) => {
		return this.post(`Users/signin`, userLogin);
	};
	signup = (userSignup) => {
		return this.post(`Users/signup`, userSignup);
	};
}

export const userService = new UserService();
