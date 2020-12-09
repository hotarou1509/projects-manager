import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from '../style';

export default function AuthTemplate(propsRoute) {
	let { Component, SidePanel, mode, ...restRoute } = propsRoute;

	return (
		<>
			<Route
				{...restRoute}
				render={(propsRoute) => {
					return (
						<>
							<Container className={mode}>
								<div className="row">
									<div className="col-6">
										<SidePanel {...propsRoute} />
									</div>
									<div className="col-6">
										<Component
											{...propsRoute}
											className={mode}
										/>
									</div>
								</div>
							</Container>
						</>
					);
				}}
			/>
		</>
	);
}
