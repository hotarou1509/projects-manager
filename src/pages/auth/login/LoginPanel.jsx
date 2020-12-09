import React from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import { Button } from '../../../templates/style';
import { PanelLeft } from '../style';

export default function LoginPanel() {
	const { opacity, transform } = useSpring({
		from: {
			opacity: 0,
			transform: 'translateX(-300px)',
		},
		to: { opacity: 1, transform: 'translateX(0px)' },
		config: { duration: 700 },
	});
	return (
		<PanelLeft className="panel-left d-flex align-items-center">
			<animated.div style={{ opacity, transform }}>
				<div className="container text-center text-white">
					<h3>New here ?</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Debitis, ex ratione. Aliquid!
					</p>
					<Button className="transparent">
						<Link className="link" to="/signup">
							Sign up
						</Link>
					</Button>
				</div>
				<img className="mt-5" src="./assets/img/log.svg" alt="log" />
			</animated.div>
		</PanelLeft>
	);
}
