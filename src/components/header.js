import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import HomeIcon from '../images/home_icon.svg';

function Header() {
	const { site } = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<header className="bg-crooked-purple">
			<div className="flex flex-wrap items-center justify-end max-w-4xl mx-auto p-4">
				<Link className="flex items-center no-underline text-white" to="/">
					<img src={HomeIcon} />
					<span className="hidden font-bold text-xl tracking-tight">
						{site.siteMetadata.title}
					</span>
				</Link>
			</div>
		</header>
	);
}

export default Header;
