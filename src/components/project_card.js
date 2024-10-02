import React from 'react';
import TechButton from './tech_button';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';
import { SiNestjs } from 'react-icons/si';
import { SiLaravel } from 'react-icons/si';

export default function ProjectCard(props) {
	let techs = [];

	let tech_icons = {
		HTML: { type: 'fontawesome', className: 'fa-brands fa-html5' },
		CSS: { type: 'fontawesome', className: 'fa-brands fa-css3' },
		JavaScript: {
			type: 'fontawesome',
			className: 'fa-brands fa-js-square'
		},
		React: { type: 'fontawesome', className: 'fa-brands fa-react' },
		'Node.js': { type: 'fontawesome', className: 'fa-brands fa-node-js' },
		Express: { type: 'fontawesome', className: 'fa-brands fa-node-js' },
		MongoDB: { type: 'fontawesome', className: 'fa-brands fa-envira' },
		Python: { type: 'fontawesome', className: 'fa-brands fa-python' },
		Django: { type: 'fontawesome', className: 'fa-brands fa-python' },
		Flask: { type: 'fontawesome', className: 'fa-brands fa-python' },
		'C++': { type: 'fontawesome', className: 'fa-brands fa-cuttlefish' },
		C: { type: 'fontawesome', className: 'fa-brands fa-cuttlefish' },
		Java: { type: 'fontawesome', className: 'fa-brands fa-java' },
		Spring: { type: 'fontawesome', className: 'fa-brands fa-spring' },
		MySQL: { type: 'fontawesome', className: 'fa-solid fa-database' },
		Git: { type: 'fontawesome', className: 'fa-brands fa-git' },
		TailwindCSS: { type: 'svg', component: RiTailwindCssFill },
		TypeScript: { type: 'svg', component: SiTypescript },
		NestJS: { type: 'svg', component: SiNestjs },
		Laravel: { type: 'svg', component: SiLaravel }
	};

	if (props.tech) techs = props.tech.split(', ');

	return (
		<div className="flex items-center my-5">
			<img
				className="mr-4 h-64 w-auto rounded-lg"
				src={props.image}
				alt={props.title}
			/>
			<div className="flex flex-col max-w-lg">
				<h4 className="font-semibold text-2xl">{props.title}</h4>
				<div className="flex space-x-4 mb-2">
					{techs.map((element) => (
						<TechButton text={element} icon={tech_icons[element]} />
					))}
				</div>

				<p className="mb-2 text-lg">{props.description}</p>
				<div className="flex space-x-4">
					{props.github && (
						<a
							href={props.github}
							target="_blank"
							rel="noreferrer"
							className="flex items-center mb-1 text-lg hover:text-blue-500 transition-colors duration-300 ease-in-out transform hover:scale-105"
						>
							<i className="fa-brands fa-github pr-2"></i>GitHub
						</a>
					)}
					{props.preview && (
						<a
							href={props.preview}
							target="_blank"
							rel="noreferrer"
							className="flex items-center text-lg hover:text-blue-500 transition-colors duration-300 ease-in-out transform hover:scale-105"
						>
							<i className="fa-solid fa-link pr-2"></i>Acceder
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
