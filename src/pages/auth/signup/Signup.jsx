import React from 'react';
import SocialMediaLog from '../../../components/social/SocialMediaLog';
import { Button } from '../../../templates/style';
import { Form } from '../style';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { signupAction } from '../../../redux/actions/Actions';

function Signup(props) {
	const { handleSubmit, handleChange, errors } = props;
	return (
		<>
			<Form onSubmit={handleSubmit} className="sign-up-form">
				<h2 className="title">Sign up</h2>
				<div className="input-field">
					<i className="fas fa-user" />
					<input
						onChange={handleChange}
						type="text"
						name="name"
						placeholder="Name"
					/>
				</div>
				<div className="text-danger">{errors.name}</div>
				<div className="input-field">
					<i className="fa fa-mobile-alt"></i>
					<input
						onChange={handleChange}
						type="text"
						name="phoneNumber"
						placeholder="Phone"
					/>
				</div>
				<div className="text-danger">{errors.phoneNumber}</div>
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
				<Button type="submit">Sign up</Button>
				<SocialMediaLog />
			</Form>
		</>
	);
}

const signupWithFormik = withFormik({
	mapPropsToValues: () => ({
		name: '',
		email: '',
		passWord: '',
		phoneNumber: '',
	}),

	validationSchema: Yup.object().shape({
		name: Yup.string().required('Name is required!'),
		email: Yup.string()
			.required('Email is required!')
			.email('Email is invalid!'),
		passWord: Yup.string()
			.required('Password is required!')
			.min(6, 'Password must have min 6 characters!')
			.max(32, 'Password must have max 32 characters!'),
		phoneNumber: Yup.string().required('Phone number is required!'),
	}),

	handleSubmit: (
		{ name, email, passWord, phoneNumber },
		{ props, setSubmitting },
	) => {
		props.dispatch(signupAction(name, email, passWord, phoneNumber));
	},
})(Signup);

export default connect()(signupWithFormik);
