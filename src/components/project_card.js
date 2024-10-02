import React from 'react';

export default function ProjectCard(props) {
	return (
		<div className="flex items-center my-5">
			<img
				className="mr-4 h-64 w-auto rounded-lg"
				src={props.image}
				alt={props.title}
			/>
			<div className="flex flex-col">
				<h4 className="font-semibold">{props.title}</h4>
				<p className="mb-2">{props.description}</p>
				{console.log(props.github)}
				<div className="flex space-x-4">
					{props.github && (
						<a
							href={props.github}
							target="_blank"
							rel="noreferrer"
							className="flex items-center mb-1"
						>
							<i className="fa-brands fa-github pr-2"></i>GitHub
						</a>
					)}
					{props.preview && (
						<a
							href={props.preview}
							target="_blank"
							rel="noreferrer"
							className="flex items-center"
						>
							<i className="fa-solid fa-eye pr-2"></i>Preview
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
