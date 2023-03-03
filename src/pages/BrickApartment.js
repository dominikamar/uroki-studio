import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SingleProject.scss';
import img1 from '../images/pr-3/1.jpg';
import img2 from '../images/pr-3/2.jpg';
import img3 from '../images/pr-3/3.jpg';
import img4 from '../images/pr-3/4.jpg';
import img5 from '../images/pr-3/5.jpg';
import img6 from '../images/pr-3/6.jpg';
import img7 from '../images/pr-3/7.jpg';
import img8 from '../images/pr-3/8.jpg';
import img9 from '../images/pr-3/9.jpg';

const BrickApartment = () => {
	return (
		<>
			<div className='wrapper photos-section'>
				<img src={img1} alt='Klatka schodowa z neonem' />
				<img src={img2} alt='Klatka schodowa wykończona mikrocementem' />
				<img src={img3} alt='Aneks kuchenny' />
				<img src={img4} alt='Jadalnia' />
				<img src={img5} alt='Ściana TV w salonie' />
				<img src={img6} alt='Łóżko w sypialni głownej' />
				<img src={img7} alt='Szafa w sypialni głównej' />
				<img src={img8} alt='Sofa w pokoju gościnnym' />
				<img src={img9} alt='Regał w pokoju gościnnym' />
			</div>
			<Link className='back-to-portfolio' to='/portfolio'>
				Powrót do portfolio
			</Link>
		</>
	);
};

export default BrickApartment;
