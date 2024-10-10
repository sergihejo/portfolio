import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
	const [formData, setFormData] = useState({ name: '', email: '' });
	const [result, setResult] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
		try {
			// Convertir los datos del formulario a un objeto FormData
			const dataToSend = new FormData();
			dataToSend.append('name', formData.name);
			dataToSend.append('email', formData.email);
			dataToSend.append('message', formData.message);

			const response = await fetch('https://formspree.io/f/mpwzabzb', {
				method: 'POST',
				body: dataToSend,
				headers: {
					Accept: 'application/json'
				}
			});

			const data = await response.json();

			if (data.ok) {
				setResult(
					'Formulario enviado correctamente. ¡Gracias por contactar!'
				);
				// Limpiar el formulario tanto visualmente como el estado
				setFormData({ name: '', email: '', message: '' }); // Limpiar el estado del formulario
				event.target.reset(); // Limpiar los campos del formulario HTML
			} else {
				console.log('Error', data);
				setResult(data.error || 'Error al enviar el formulario');
			}
		} catch (error) {
			console.error('Error en la solicitud', error);
			setResult('Ocurrió un error al enviar el formulario');
		}
	};

	return (
		<div
			id="contact"
			className="flex flex-col items-center justify-center w-full mb-10"
		>
			<h2 className="text-4xl font-semibold my-5">
				<i class="fa-solid fa-envelope-open-text"></i> Contacto
			</h2>
			<p className="text-lg mb-5 w-2/3">
				Puedes contactar conmigo utilizando el siguiente formulario
			</p>
			<form className="flex flex-col w-2/3" onSubmit={handleSubmit}>
				<label htmlFor="name" className="text-lg">
					Nombre y apellidos
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					className="border-2 border-gray-300 rounded-lg p-1 mb-3 text-black"
					required
				/>
				<label htmlFor="email" className="text-lg">
					Correo electrónico
				</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					className="border-2 border-gray-300 rounded-lg p-1 mb-3 text-black"
					required
				/>
				<label htmlFor="message" className="text-lg">
					Mensaje
				</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					className="border-2 border-gray-300 rounded-lg p-1 mb-3 text-black"
					required
				/>

				<button
					type="submit"
					className="bg-blue-500 text-white font-semibold p-2 rounded-lg"
				>
					Enviar
				</button>
			</form>
			<span className="my-10 text-lg">{result}</span>
		</div>
	);
}
