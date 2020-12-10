import Axios from 'axios';
import { DOMAIN_API, TOKEN } from '../utils/const/settingSystem';

export class baseService {
	post = (url, model) => {
		return Axios({
			url: `${DOMAIN_API}/${url}`,
			method: 'POST',
			data: model,
			headers: { Authorization: 'Bearer ' + localStorage.getItem(TOKEN) },
		});
	};
	get = (url) => {
		return Axios({
			url: `${DOMAIN_API}/${url}`,
			method: 'GET',
			headers: { Authorization: 'Bearer ' + localStorage.getItem(TOKEN) },
		});
	};
	put = (url, model) => {
		return Axios({
			url: `${DOMAIN_API}/${url}`,
			method: 'PUT',
			data: model,
			headers: { Authorization: 'Bearer ' + localStorage.getItem(TOKEN) },
		});
	};
	delete = (url) => {
		return Axios({
			url: `${DOMAIN_API}/${url}`,
			method: 'DELETE',
			headers: { Authorization: 'Bearer ' + localStorage.getItem(TOKEN) },
		});
	};
}
