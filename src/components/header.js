import { Link } from 'gatsby';
import React from 'react';
import HomeIcon from '../images/home_icon.svg';

function Header() {
	return (
		<header className="bg-crooked-purple">
			<div className="flex flex-wrap items-center justify-end max-w-sm lg:max-w-4xl mx-auto p-4">
				<Link className="flex items-center no-underline text-white" to="/">
					<img src={HomeIcon} alt="Home icon" />
				</Link>
			</div>
		</header>
	);
}

export default Header;
