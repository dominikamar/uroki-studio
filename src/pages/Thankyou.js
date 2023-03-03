import React from 'react';
import '../styles/Thankyou.scss';

const Thankyou = () => {
	return (
		<div className='wrapper thankyou-section'>
			<div className='text-box'>
				<p className='main-paragraph'>Dziękujemy za wiadomość.</p>
				<p className='info-paragraph'>
					Na wszystkie maile odpowiadamy w przeciągu 2 dni roboczych.
				</p>
				<p className='last-paragraph'>Do usłyszenia!</p>
			</div>
		</div>
	);
};
export default Thankyou;
