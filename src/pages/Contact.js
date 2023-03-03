import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.scss';

const ContactInfo = () => {
	return (
		<div className='contact-info'>
			<h2>Uroki Studio</h2>
			<p>kontakt@urokistudio.pl</p>
			<p>+48 622 362 788</p>
			<Link
				to='https://instagram.com/uroki.studio?igshid=YmMyMTA2M2Y='
				target='_blank'
				rel='noopener'>
				<p className='footer-link'>
					<i className='fa-brands fa-instagram'></i> Instagram
				</p>
			</Link>
		</div>
	);
};

const ContactForm = () => {
	const [mail, setMail] = useState('');
	const [msg, setMsg] = useState('');
	const [error, setError] = useState(false);

	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	const handleMail = (e) => {
		setMail(e.target.value);
	};
	const handleMsg = (e) => {
		setMsg(e.target.value);
	};

	const handleSubmit = (e) => {
		if (re.test(mail) === false || msg.length === 0) {
			setError(true);
			e.preventDefault();
		}
		if (mail && msg) {
			// setMail('');
			// setMsg('');
			setError(false);
		}
	};

	return (
		<div className='contact-form'>
			<form
				onSubmit={handleSubmit}
				action='https://formsubmit.io/send/kontakt@urokistudio.pl'
				method='POST'>
				<label htmlFor='mail'>Twój e-mail:</label>
				<input
					onChange={handleMail}
					id='mail'
					name='mail'
					type='mail'
					placeholder='Wpisz swój adres'
					value={mail}
				/>
				{error && re.test(mail) === false ? (
					<p className='error-message'>Podaj adres e-mail</p>
				) : null}
				<label htmlFor='msg'>Twoja wiadomość:</label>
				<textarea
					onChange={handleMsg}
					id='msg'
					name='msg'
					placeholder='Wpisz wiadomość'
					value={msg}
				/>
				{error && msg.length === 0 ? (
					<p className='error-message'>Wpisz treść wiadomości</p>
				) : null}
				<input
					name='_redirect'
					type='hidden'
					id='name'
					value='https://uroki-studio.pl/#/dziekujemy'></input>

				<button type='submit'>Wyślij</button>
			</form>
		</div>
	);
};

const Contact = () => {
	return (
		<div className='wrapper contact-section'>
			<h2 className='section-header'>Kontakt</h2>
			<div className='contact-box'>
				<ContactInfo />
				<ContactForm />
			</div>
		</div>
	);
};
export default Contact;
