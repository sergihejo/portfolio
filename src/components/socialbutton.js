import React from 'react';
import './socialbutton.css';

export default function SocialButton(props) {
	return (
		<a
			href={props.link}
			target="_blank"
			rel="noopener noreferrer"
			className="button border-none text-white py-1 px-3 my-1 mx-0.5 text-center rounded-full font-medium text-base inline-block text-lg"
		>
			<i className={props.icon}></i>
			<button className="social-button">{props.text}</button>
		</a>
	);
}
