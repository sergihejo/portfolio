import React from 'react';

export default function TechButton(props) {
	const renderIcon = () => {
		if (!props.icon) return null;
		if (props.icon.type === 'fontawesome') {
			return <i className={props.icon.className + ' mr-2'}></i>;
		} else if (props.icon.type === 'svg') {
			const IconComponent = props.icon.component;
			return <IconComponent className="inline-icon mr-2" />;
		} else if (props.icon.type === 'image') {
			return (
				<img
					src={props.icon.src}
					alt={`${props.text} icon`}
					className="inline-icon w-6 h-6"
				/>
			);
		}
		return null;
	};

	return (
		<button className="tech-button flex items-center space-x-2 border-none text-white py-1 px-3 my-1 mx-0.5 text-center rounded-full font-medium text-base inline-block text-lg">
			{renderIcon()} {props.text}
		</button>
	);
}
