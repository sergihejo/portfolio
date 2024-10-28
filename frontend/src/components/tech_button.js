import React from 'react';
import propTypes from 'prop-types';

export default function TechButton(props) {
	const renderIcon = () => {
		if (!props.icon) return null;
		if (props.icon.type === 'fontawesome') {
			return <i className={props.icon.className + ' mr-1'}></i>;
		} else if (props.icon.type === 'svg') {
			const IconComponent = props.icon.component;
			return <IconComponent className="inline-icon mr-1" />;
		} else if (props.icon.type === 'image') {
			return (
				<img
					src={props.icon.src}
					alt={`${props.text} icon`}
					className="block-icon mb-1 w-6 h-6"
				/>
			);
		}
		return null;
	};

	return (
		<button className="tech-button flex space-x-1 items-center border-none text-white text-center rounded-full font-medium text-lg inline-block cursor-default">
			{renderIcon()} {props.text}
		</button>
	);
}

TechButton.propTypes = {
	text: propTypes.string.isRequired,
	icon: propTypes.object,
};
