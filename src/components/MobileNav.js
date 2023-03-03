import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/MobileNav.scss';
import logo from '../images/logo.png';

const NavLinks = (props) => {
	return (
		<div className='mobile-nav'>
			<NavLink to='/'>
				<button onClick={props.closeNav} className='mobile-nav-link'>
					Strona główna
				</button>
			</NavLink>
			<NavLink to='/o-nas'>
				<button className='mobile-nav-link' onClick={props.closeNav}>
					O nas
				</button>
			</NavLink>
			<NavLink to='/portfolio'>
				<button className='mobile-nav-link' onClick={props.closeNav}>
					Portfolio
				</button>
			</NavLink>
			<NavLink to='/oferta'>
				<button className='mobile-nav-link' onClick={props.closeNav}>
					Oferta
				</button>
			</NavLink>
			<NavLink to='/kontakt'>
				<button className='mobile-nav-link' onClick={props.closeNav}>
					Kontakt
				</button>
			</NavLink>
		</div>
	);
};

const Navigation = () => {
	const [visibility, setVisibility] = useState(false);
	const handleClick = () => {
		setVisibility(() => !visibility);
	};
	const closeNav = () => {
		setVisibility(() => setVisibility(false));
	};

	return (
		<>
			<div className='nav-box'>
				<img className='nav-logo' src={logo} alt='logo Uroki Studio' />
				<button className='burger-btn' onClick={handleClick}>
					<i className='fa-solid fa-bars'></i>
				</button>
			</div>
			{visibility && <NavLinks closeNav={closeNav} />}
		</>
	);
};

export default Navigation;
