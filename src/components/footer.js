import React from 'react';

export default function Footer() {
	return (
		<footer className="footer flex flex-col items-center justify-center w-full bg-gray-800 text-white py-5">
			<p className="text-center">
				&copy; 2021 - Hecho con{' '}
				<span role="img" aria-label="corazón">
					❤️
				</span>{' '}
				por{' '}
				<a
					href="https://test.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500"
				>
					Test
				</a>
			</p>
		</footer>
	);
}
