import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SingleProject.scss';
import img1 from '../images/pr-6/1.jpg';
import img2 from '../images/pr-6/2.jpg';
import img3 from '../images/pr-6/3.jpg';

const PragaApartment = () => {
	return (
		<>
			<div className='wrapper photos-section'>
				<img src={img1} alt='Żółta sofa we wnęce' />
				<img src={img2} alt='Ściana TV z półkami' />
				<img src={img3} alt='Aneks kuchenny ze stołem' />
			</div>
			<Link className='back-to-portfolio' to='/portfolio'>
				Powrót do portfolio
			</Link>
		</>
	);
};

export default PragaApartment;
