import React from 'react';
import SocialMediaLog from '../../../components/social/SocialMediaLog';
import * as Yup from 'yup';
import { Button } from '../../../templates/style';
import { Form } from '../style';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { signinAction } from '../../../redux/actions/Actions';

function Login(props) {
	const { handleChange, handleSubmit, errors } = props;
	return (
		<Form onSubmit={handleSubmit} className="sign-in-form">
			<h2 className="title">Sign in</h2>
			<div className="input-field">
				<i className="fas fa-envelope" />
				<input
					onChange={handleChange}
					type="email"
					name="email"
					placeholder="Email"
				/>
			</div>
			<div className="text-danger">{errors.email}</div>
			<div className="input-field">
				<i className="fas fa-lock" />
				<input
					onChange={handleChange}
					type="password"
					name="passWord"
					placeholder="Password"
				/>
			</div>
			<div className="text-danger">{errors.passWord}</div>
			<Button type="submit">Login</Button>
			<SocialMediaLog />
		</Form>
	);
}

const LoginWithFormik = withFormik({
	mapPropsToValues: () => ({ email: '', passWord: '' }),

	validationSchema: Yup.object().shape({
		email: Yup.string()
			.required('Email is required!')
			.email('Email is invalid!'),
		passWord: Yup.string()
			.min(6, 'Password must have min 6 characters!')
			.max(32, 'Password must have max 32 characters!'),
	}),

	handleSubmit: ({ email, passWord }, { props, setSubmitting }) => {
		props.dispatch(signinAction(email, passWord));
	},
})(Login);

export default connect()(LoginWithFormik);
