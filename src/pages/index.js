import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage() {
	const { site } = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	const title = site.siteMetadata.title.split(' ');

	return (
		<Layout>
			<SEO
				keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
				title="Home"
			/>

			<section className="text-center">
				<h1 className="font-bold text-4xl lg:text-6xl leading-tight my-8 px-2 border-b-4 border-crooked-purple inline-block">
					{title[0]}
					<em className="font-light">{title[1]}</em>
				</h1>

				<p className="leading-loose">
					This is a barebones starter for Gatsby styled using{` `}
					<a
						className="font-bold no-underline text-gray-900"
						href="https://tailwindcss.com/">
						Tailwind
					</a>
					, a utility-first CSS framework.
				</p>
			</section>
		</Layout>
	);
}

export default IndexPage;
