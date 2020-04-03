import React from 'react';

function Footer() {
	return (
		<footer className="bg-crooked-purple">
			<nav className="flex justify-center items-center max-w-4xl mx-auto p-4 text-sm">
				<p className="text-white">
					Created By{' '}
					<a
						className="font-bold hover:underline"
						rel="noopener noreferrer"
						target="_blank"
						href="https://jgrant.co">
						Joseph Grant
					</a>
				</p>
			</nav>
		</footer>
	);
}

export default Footer;
