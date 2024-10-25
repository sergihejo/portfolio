import React, { useState } from 'react';
import TechButton from './tech_button';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';
import { SiNestjs } from 'react-icons/si';
import { SiLaravel } from 'react-icons/si';
import { SiJenkins } from 'react-icons/si';
import { SiGrafana } from 'react-icons/si';
import { MdOutlineGif } from 'react-icons/md';

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
		'C++': { type: 'fontawesome', className: 'fa-brands fa-cuttlefish' },
		C: { type: 'fontawesome', className: 'fa-brands fa-cuttlefish' },
		Java: { type: 'fontawesome', className: 'fa-brands fa-java' },
		MySQL: { type: 'fontawesome', className: 'fa-solid fa-database' },
		Git: { type: 'fontawesome', className: 'fa-brands fa-git' },
		TailwindCSS: { type: 'svg', component: RiTailwindCssFill },
		TypeScript: { type: 'svg', component: SiTypescript },
		NestJS: { type: 'svg', component: SiNestjs },
		Laravel: { type: 'svg', component: SiLaravel },
		Jenkins: { type: 'svg', component: SiJenkins },
		Grafana: { type: 'svg', component: SiGrafana }
	};

	if (props.tech) techs = props.tech.split(', ');

	var gifs = [];
	if (props.demo) {
		gifs = props.demo.split(',').map((gif) => gif.trim());
	}

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentGifIndex, setCurrentGifIndex] = useState(0);

	const openModal = (index) => {
		setCurrentGifIndex(index);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleBackgroundClick = (e) => {
		if (e.target === e.currentTarget) {
			closeModal();
		}
	};

	const showNextGif = () => {
		setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
	};

	const showPreviousGif = () => {
		setCurrentGifIndex(
			(prevIndex) => (prevIndex - 1 + gifs.length) % gifs.length
		);
	};

	return (
		<div className="flex flex-col md:flex-row items-center my-16 ">
			<img
				className="mr-0 md:mr-4 mb-4 md:mb-0 h-auto w-full md:w-auto max-h-64 rounded-lg object-cover"
				src={props.image}
				alt={props.title}
			/>
			<div className="flex flex-col ml-0 md:ml-4">
				<h4 className="font-semibold text-3xl">{props.title}</h4>
				<div className="flex flex-wrap gap-2 my-4 md:gap-4 md:flex-row">
					{techs.map((element) => (
						<TechButton text={element} icon={tech_icons[element]} />
					))}
				</div>

				<p className="mb-2 text-lg text-justify">{props.description}</p>
				<div className="flex space-x-4 mt-2">
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
					{props.demo && (
						<button
							onClick={() => openModal(0)} // Cambia esto por la ruta del GIF
							className="flex items-center text-lg hover:text-blue-500 transition-colors duration-300 ease-in-out transform hover:scale-105"
						>
							<MdOutlineGif className="text-4xl" />
							Ver GIFs de la demo
						</button>
					)}
				</div>
			</div>
			{isModalOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 w-full"
					onClick={handleBackgroundClick}
				>
					<div className="p-4 rounded w-5/6">
						<button
							onClick={closeModal}
							className="absolute top-9 right-9 text-red-500 hover:text-red-700 focus:outline-none"
							aria-label="Cerrar"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-12 w-12"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>

						<div className="flex items-center justify-center">
							<div className="flex items-center">
								<div className="w-16">
									{currentGifIndex > 0 && (
										<i
											className="fa-solid fa-angle-left py-4 px-6 rounded text-6xl hover:text-blue-500 transition-colors duration-200 hover:cursor-pointer"
											onClick={showPreviousGif}
										></i>
									)}
								</div>
							</div>
							<img
								src={gifs[currentGifIndex]}
								alt="Demo"
								className="w-full h-auto mx-4"
							/>
							<div className="flex items-center">
								<div className="w-16">
									{currentGifIndex < gifs.length - 1 && (
										<i
											className="fa-solid fa-angle-right py-4 px-6 rounded text-6xl hover:text-blue-500 transition-colors duration-200 hover:cursor-pointer"
											onClick={showNextGif}
											disabled={currentGifIndex === 0}
										></i>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
