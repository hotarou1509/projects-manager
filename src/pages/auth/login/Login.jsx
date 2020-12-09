import React from 'react';
import SocialMediaLog from '../../../components/social/SocialMediaLog';
import { Button } from '../../../templates/style';
import { Form } from '../style';

export default function Login() {
	return (
		<Form action="#" className="sign-in-form">
			<h2 className="title">Sign in</h2>
			<div className="input-field">
				<i className="fas fa-user" />
				<input type="text" placeholder="Username" />
			</div>
			<div className="input-field">
				<i className="fas fa-lock" />
				<input type="password" placeholder="Password" />
			</div>
			<Button type="submit">Login</Button>
			<SocialMediaLog />
		</Form>
	);
}
