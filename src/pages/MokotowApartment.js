import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SingleProject.scss';
import img1 from '../images/pr-1/1.jpg';
import img2 from '../images/pr-1/2.jpg';
import img3 from '../images/pr-1/3.jpg';
import img4 from '../images/pr-1/4.jpg';
import img5 from '../images/pr-1/5.jpg';
import img6 from '../images/pr-1/6.jpg';
import img7 from '../images/pr-1/7.jpg';
import img8 from '../images/pr-1/8.jpg';
import img9 from '../images/pr-1/9.jpg';
import img10 from '../images/pr-1/10.jpg';
import img11 from '../images/pr-1/11.jpg';
import img12 from '../images/pr-1/12.jpg';
import img13 from '../images/pr-1/13.jpg';

const MokotowApartment = () => {
	return (
		<>
			<div className='wrapper photos-section'>
				<img src={img1} alt='Kuchnia z wyspą' />
				<img src={img2} alt='Wysoka zabudowa w kuchni' />
				<img src={img3} alt='Widok na gabinet' />
				<img src={img4} alt='Miejsce do pracy w gabinecie' />
				<img src={img5} alt='Widok na salon i kuchnię' />
				<img src={img6} alt='Widok na jadalnię i salon' />
				<img src={img7} alt='Ściana TV w salonie' />
				<img src={img8} alt='Jadalnia i hol' />
				<img src={img9} alt='Szafa w holu' />
				<img src={img10} alt='Łazienka z wanną' />
				<img src={img11} alt='Umywalki i lustro w łazience z wanną' />
				<img src={img12} alt='Strefa prysznica w mniejszej łazience' />
				<img src={img13} alt='Umywalka w mniejszej łazience' />
			</div>
			<Link className='back-to-portfolio' to='/portfolio'>
				Powrót do portfolio
			</Link>
		</>
	);
};

export default MokotowApartment;
