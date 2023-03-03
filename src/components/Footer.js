import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.scss';
const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className='wrapper'>
			<div>
				<p className='footer-name'>Uroki Studio</p>
				<p className='footer-subtitle'>Projektowanie wnętrz</p>
			</div>
			<div>
				<p>kontakt@urokistudio.pl</p>
				<p>+48 622 362 788</p>
			</div>
			<div>
				<Link
					to='https://instagram.com/uroki.studio?igshid=YmMyMTA2M2Y='
					target='_blank'
					rel='noopener'>
					<p className='footer-link'>
						<i className='fa-brands fa-instagram'></i> Instagram
					</p>
				</Link>
			</div>
			<div>
				<p className='copyright'>&copy; {year} Uroki Studio</p>
				<p className='footer-author'>Autor: Dominika Marczyńska</p>
			</div>
		</footer>
	);
};

export default Footer;
