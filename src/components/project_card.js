import React from 'react';

export default function ProjectCard(props) {
	return (
		<div className="flex items-center my-5">
			<img
				className="mr-4 h-64 w-auto rounded-lg"
				src={props.image}
				alt={props.title}
			/>
			<div className="flex flex-col max-w-lg">
				<h4 className="font-semibold text-2xl">{props.title}</h4>
				<p className="mb-2 text-lg">{props.description}</p>
				{console.log(props.github)}
				<div className="flex space-x-4">
					{props.github && (
						<a
							href={props.github}
							target="_blank"
							rel="noreferrer"
							className="flex items-center mb-1 text-lg"
						>
							<i className="fa-brands fa-github pr-2"></i>GitHub
						</a>
					)}
					{props.preview && (
						<a
							href={props.preview}
							target="_blank"
							rel="noreferrer"
							className="flex items-center text-lg"
						>
							<i className="fa-solid fa-link pr-2"></i>Acceder
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
