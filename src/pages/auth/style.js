import styled from 'styled-components';

/* SIDE PANEL */

export const PanelLeft = styled.div`
	height: 100vh;
	img {
		width: 80%;
	}
	position: absolute;
	z-index: 3;
`;

export const PanelRight = styled.div`
	height: 100vh;
	img {
		width: 80%;
	}
	position: absolute;
	z-index: 3;
	transform: translateX(800px);
`;

/* FORM */

export const Form = styled.form`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0rem 5rem;
	transition: all 0.2s 0.7s;
	overflow: hidden;
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	z-index: 1;
	.title {
		font-size: 2.2rem;
		color: #444;
		margin-bottom: 10px;
	}
	.input-field {
		max-width: 380px;
		width: 100%;
		background-color: #f0f0f0;
		margin: 10px 0;
		height: 55px;
		border-radius: 55px;
		display: grid;
		grid-template-columns: 15% 85%;
		padding: 0 0.4rem;
		position: relative;
		i {
			text-align: center;
			line-height: 55px;
			color: #acacac;
			transition: 0.5s;
			font-size: 1.1rem;
		}
		input {
			background: none;
			outline: none;
			border: none;
			line-height: 1;
			font-weight: 600;
			font-size: 1.1rem;
			color: #333;
			&::placeholder {
				color: #aaa;
				font-weight: 500;
			}
		}
	}
	&.sign-up-form {
		transform: translateX(-800px);
	}
`;

export const SocialHeading = styled.p`
	padding: 0.7rem 0;
	font-size: 1rem;
	text-align: center;
`;

export const SocialMedia = styled.div`
	display: flex;
	justify-content: center;
	a {
		cursor: pointer;
		height: 46px;
		width: 46px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 0.45rem;
		color: #333;
		border-radius: 50%;
		border: 1px solid #333;
		text-decoration: none;
		font-size: 1.1rem;
		transition: all 0.3s;
		&:hover {
			border-color: #4481eb;
		}
		&:hover > i {
			transition: all 0.3s;
			color: #4481eb;
		}
	}
`;
