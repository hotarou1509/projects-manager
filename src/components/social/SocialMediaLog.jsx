import React from 'react';
import { SocialHeading, SocialMedia } from '../../pages/auth/style';

export default function SocialMediaLog() {
	return (
		<>
			<SocialHeading>Or Sign in with social platforms</SocialHeading>
			<SocialMedia>
				<a href>
					<i className="fab fa-facebook-f" />
				</a>
				<a href>
					<i className="fab fa-twitter" />
				</a>
				<a href>
					<i className="fab fa-google" />
				</a>
				<a href>
					<i className="fab fa-linkedin-in" />
				</a>
			</SocialMedia>
		</>
	);
}
