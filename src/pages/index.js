import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/button';

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
				<h1 className="font-bold text-5xl lg:text-6xl leading-tight my-12 lg:my-16 px-2 border-b-4 border-crooked-purple inline-block">
					{title[0]}
					<em className="font-light">{title[1]}</em>
				</h1>

				<p className="font-montserrat leading-loose">Choose your difficulty:</p>
				<Button text="Flow" bgColor="flow-green" />
				<Button text="AM" bgColor="am-blue" />
				<Button text="Pro" bgColor="pro-red" />
			</section>
		</Layout>
	);
}

export default IndexPage;
