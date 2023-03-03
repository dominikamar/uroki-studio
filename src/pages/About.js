import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.scss';
import img from '../images/about-us.jpg';

const About = () => {
	return (
		<div className='wrapper'>
			<div className='about-section'>
				<h2 className='about-header'>O nas</h2>
				<div className='about-box'>
					<img className='about-photo' src={img} alt='Spotkanie przy stole' />
					<div className='about-paragraph'>
						<p>
							Pracownia Uroki Studio została założona z myślą o stworzeniu
							miejsca, które zapewni jego Klientom najwyższą jakość usług. Nasz
							zespół codziennie pracuje nad tym, aby jak najlepiej połączyć
							funkcjonalność oraz estetykę wnętrza, przy zadbaniu o nawet
							najmniejsze detale. Wierzymy, że każdy projekt musi być
							dostosowany do jego użytkowników, aby każda chwila w nim spędzona
							przynosiła uczucie ukojenia, relaksu i spokoju.
						</p>
						<p>
							Projektujemy wnętrza prywatne: mieszkania, domy, apartamenty, a
							także biura oraz przestrzenie komercyjne. Do wszystkich projektów
							podchodzimy w sposób indywidualny, a każdy m2 jest dla nas równie
							istotny.
						</p>
						<p>
							Zachęcamy do zapoznania się z ofertą pracowni oraz naszym
							portfolio.
						</p>
						<div className='buttons'>
							<Link to='/oferta'>
								<button className='about-btn'>
									<div className='circle'></div>Poznaj naszą ofertę
								</button>
							</Link>
							<Link to='/portfolio'>
								<button className='about-btn'>
									<div className='circle'></div>Przejdź do portfolio
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default About;
