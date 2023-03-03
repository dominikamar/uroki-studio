import React from 'react';
import '../styles/Home.scss';
import logo from '../images/logo-white.png';

const Home = () => {
	return (
		<>
			<div className='first-hero-img'>
				<div className='img-box'>
					<img className='first-hero-logo' src={logo} alt='logo Uroki Studio' />
				</div>
			</div>
			<div className='section hero-img'></div>
		</>
	);
};
export default Home;
