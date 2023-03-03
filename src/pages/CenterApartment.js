import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SingleProject.scss';
import img1 from '../images/pr-5/1.jpg';
import img2 from '../images/pr-5/2.jpg';
import img3 from '../images/pr-5/3.jpg';
import img4 from '../images/pr-5/4.jpg';

const CenterApartment = () => {
	return (
		<>
			<div className='wrapper photos-section'>
				<img src={img1} alt='Aneks kuchenny ze stołem' />
				<img src={img2} alt='Salon z sofą' />
				<img src={img3} alt='Sypialnia we wnęce' />
				<img src={img4} alt='Widok na jadalnię i salon' />
			</div>
			<Link className='back-to-portfolio' to='/portfolio'>
				Powrót do portfolio
			</Link>
		</>
	);
};

export default CenterApartment;
