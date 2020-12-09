import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	width: 100%;
	background-color: #fff;
	min-height: 100vh;
	overflow: hidden;
	&::before {
		content: '';
		position: absolute;
		height: 2000px;
		width: 2000px;
		top: -10%;
		right: 48%;
		transform: translateY(-50%);
		background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
		transition: 1.8s ease-in-out;
		border-radius: 50%;
		z-index: 2;
		/* opacity: 0; */
	}
	/* ANIMATION */
	&.sign-up-mode {
		:before {
			transform: translate(100%, -50%);
			bottom: 32%;
		}
	}
`;

export const Button = styled.button`
	width: 150px;
	background-color: #5995fd;
	border: none;
	outline: none;
	height: 49px;
	border-radius: 49px;
	color: #fff;
	text-transform: uppercase;
	font-weight: 600;
	margin: 10px 0;
	cursor: pointer;
	transition: 0.5s;
	&.transparent {
		margin: 0;
		background: none;
		border: 2px solid #fff;
		width: 130px;
		height: 41px;
		font-weight: 600;
		font-size: 0.8rem;
	}
	&:hover {
		background-color: #4d84e2;
	}
	.link {
		text-decoration: none;
		color: #fff;
	}
`;
