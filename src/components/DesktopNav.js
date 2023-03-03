import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/DesktopNav.scss';
import logo from '../images/logo.png';

const Links = () => {
	return (
		<div className='navigation'>
			<div className='wrapper navigation-box'>
				<img className='nav-logo' src={logo} alt='logo Uroki Studio' />
				<div className='link-box'>
					<button>
						<NavLink to='/'>
							<div className='circle-nav'></div>Strona główna
						</NavLink>
					</button>
					<button>
						<NavLink to='/o-nas'>
							<div className='circle-nav'></div>O nas
						</NavLink>
					</button>
					<button>
						<NavLink to='/portfolio'>
							<div className='circle-nav'></div>Portfolio
						</NavLink>
					</button>
					<button>
						<NavLink to='/oferta'>
							<div className='circle-nav'></div>Oferta
						</NavLink>
					</button>
					<button>
						<NavLink to='/kontakt'>
							<div className='circle-nav'></div>Kontakt
						</NavLink>
					</button>
				</div>
			</div>
		</div>
	);
};

const DesktopNav = () => {
	return <Links />;
};

export default DesktopNav;
