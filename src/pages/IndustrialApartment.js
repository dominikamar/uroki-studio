import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SingleProject.scss';
import img1 from '../images/pr-4/1.jpg';
import img2 from '../images/pr-4/2.jpg';
import img3 from '../images/pr-4/3.jpg';
import img4 from '../images/pr-4/4.jpg';
import img5 from '../images/pr-4/5.jpg';
import img6 from '../images/pr-4/6.jpg';
import img7 from '../images/pr-4/7.jpg';
import img8 from '../images/pr-4/8.jpg';
import img9 from '../images/pr-4/9.jpg';
import img10 from '../images/pr-4/10.jpg';
import img11 from '../images/pr-4/11.jpg';

const IndustrialApartment = () => {
	return (
		<>
			<div className='wrapper photos-section'>
				<img src={img1} alt='Klatka schodowa z neonem' />
				<img src={img2} alt='Klatka schodowa wykończona mikrocementem' />
				<img src={img3} alt='Klatka schodowa wykończona mikrocementem' />
				<img src={img4} alt='Klatka schodowa wykończona mikrocementem' />
				<img src={img5} alt='Klatka schodowa wykończona mikrocementem' />
				<img src={img6} alt='Klatka schodowa wykończona mikrocementem' />
				<img src={img7} alt='Klatka schodowa wykończona mikrocementem' />
				<img src={img8} alt='Klatka schodowa wykończona mikrocementem' />
				<img src={img9} alt='Klatka schodowa wykończona mikrocementem' />
				<img src={img10} alt='Klatka schodowa wykończona mikrocementem' />
				<img src={img11} alt='Klatka schodowa wykończona mikrocementem' />
			</div>
			<Link className='back-to-portfolio' to='/portfolio'>
				Powrót do portfolio
			</Link>
		</>
	);
};

export default IndustrialApartment;
