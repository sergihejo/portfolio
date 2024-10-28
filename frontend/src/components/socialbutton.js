import React from 'react';
import './socialbutton.css';
import propTypes from 'prop-types';

export default function SocialButton(props) {
	return (
		<a
			href={props.link}
			target="_blank"
			rel="noopener noreferrer"
			className="button border-none text-white py-1 px-3 my-1 mr-4 text-center rounded-full font-medium text-base inline-block text-lg"
		>
			<i className={props.icon}></i>
			<button className="social-button">{props.text}</button>
		</a>
	);
}

SocialButton.propTypes = {
	link: propTypes.string.isRequired,
	icon: propTypes.string.isRequired,
	text: propTypes.string.isRequired,
};