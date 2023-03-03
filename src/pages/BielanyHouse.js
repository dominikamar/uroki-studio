import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SingleProject.scss';
import img1 from '../images/pr-2/1.jpg';
import img5 from '../images/pr-2/5.jpg';
import img6 from '../images/pr-2/6.jpg';
import img7 from '../images/pr-2/7.jpg';
import img8 from '../images/pr-2/8.jpg';
import img9 from '../images/pr-2/9.jpg';
import img10 from '../images/pr-2/10.jpg';
import img11 from '../images/pr-2/11.jpg';
import img12 from '../images/pr-2/12.jpg';
import img13 from '../images/pr-2/13.jpg';

const BielanyHouse = () => {
	return (
		<>
			<div className='wrapper photos-section'>
				<img src={img1} alt='Wiatrołap z lustrzaną szafą' />
				<img src={img7} alt='Jadalnia z aneksem kuchennym' />
				<img src={img8} alt='Salon ze ścianą TV' />
				<img src={img9} alt='Salon z miejscem do wypoczynku' />
				<img src={img10} alt='Toaletka w pokoju nastolatki' />
				<img src={img11} alt='Miejsce do nauki w pokoju nastolatki' />
				<img src={img12} alt='Szafa w pokoju nastolatki' />
				<img src={img13} alt='Łóżko w głównej sypialni' />
				<img src={img5} alt='Łazienka na piętrze' />
				<img src={img6} alt='Wanna w łazience na piętrze' />
			</div>
			<Link className='back-to-portfolio' to='/portfolio'>
				Powrót do portfolio
			</Link>
		</>
	);
};

export default BielanyHouse;
