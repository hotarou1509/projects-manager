import React from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import { Button } from '../../../templates/style';
import { PanelRight } from '../style';

export default function SignupPanel() {
	const { opacity, transform } = useSpring({
		from: {
			opacity: 0,
			transform: 'translateX(300px)',
		},
		to: { opacity: 1, transform: 'translateX(0px)' },
		config: { duration: 700 },
	});
	return (
		<PanelRight className="panel-right d-flex align-items-center">
			<animated.div style={{ opacity, transform }}>
				<div className="container text-center text-white">
					<h3>One of us ?</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Nostrum laboriosam ad deleniti.
					</p>
					<Button className="transparent">
						<Link className="link" to="/login">
							Sign in
						</Link>
					</Button>
				</div>
				<img
					src="./assets/img/register.svg"
					className="mt-5"
					alt="register"
				/>
			</animated.div>
		</PanelRight>
	);
}
