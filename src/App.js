import React from 'react';
import { Switch } from 'react-router-dom';
import Login from './pages/auth/login/Login';
import LoginPanel from './pages/auth/login/LoginPanel';
import Signup from './pages/auth/signup/Signup';
import SignupPanel from './pages/auth/signup/SignupPanel';
import AuthTemplate from './templates/auth/AuthTemplate';

export default function App() {
	return (
		<Switch>
			<AuthTemplate
				exact
				path="/login"
				Component={Login}
				SidePanel={LoginPanel}
				mode="sign-in-mode"
			/>
			<AuthTemplate
				exact
				path="/signup"
				Component={Signup}
				SidePanel={SignupPanel}
				mode="sign-up-mode"
			/>
		</Switch>
	);
}
