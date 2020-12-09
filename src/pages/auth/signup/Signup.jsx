import React from 'react';
import SocialMediaLog from '../../../components/social/SocialMediaLog';
import { Button } from '../../../templates/style';
import { Form } from '../style';

export default function Signup() {
	return (
		<>
			<Form action="#" className="sign-up-form">
				<h2 className="title">Sign up</h2>
				<div className="input-field">
					<i className="fas fa-user" />
					<input type="text" placeholder="Username" />
				</div>
				<div className="input-field">
					<i className="fas fa-envelope" />
					<input type="email" placeholder="Email" />
				</div>
				<div className="input-field">
					<i className="fas fa-lock" />
					<input type="password" placeholder="Password" />
				</div>
				<Button type="submit">Sign up</Button>
				<SocialMediaLog />
			</Form>
		</>
	);
}
