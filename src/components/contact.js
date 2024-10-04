import React from 'react';

export default function Contact() {
	const [result, setResult] = React.useState('');

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult('Enviando...');
		const formData = new FormData(event.target);

		const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
		formData.append('access_key', accessKey);

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: formData
		});

		const data = await response.json();

		if (data.success) {
			setResult('Formulario enviado correctamente');
			event.target.reset();
		} else {
			console.log('Error', data);
			setResult(data.message);
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
			<p className="text-lg mb-5">
				Puedes contactar conmigo utilizando el siguiente formulario
			</p>
			<form className="flex flex-col w-2/3" onSubmit={onSubmit}>
				<label htmlFor="name" className="text-lg">
					Nombre y apellidos
				</label>
				<input
					type="text"
					id="name"
					name="name"
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
					className="border-2 border-gray-300 rounded-lg p-1 mb-3 text-black"
					required
				/>
				<label htmlFor="message" className="text-lg">
					Mensaje
				</label>
				<textarea
					id="message"
					name="message"
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
