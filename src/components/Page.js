import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.js';
import About from '../pages/About.js';
import ProjectsPage from '../pages/Projects.js';
import OfferPage from '../pages/Offer.js';
import IndustrialApartment from '../pages/IndustrialApartment.js';
import MokotowApartment from '../pages/MokotowApartment.js';
import BrickApartment from '../pages/BrickApartment.js';
import BielanyHouse from '../pages/BielanyHouse.js';
import CenterApartment from '../pages/CenterApartment.js';
import PragaApartment from '../pages/PragaApartment.js';
import ContactPage from '../pages/Contact.js';
import Thankyou from '../pages/Thankyou.js';

const Page = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />;
			<Route path='/o-nas' element={<About />} />;
			<Route path='/portfolio' element={<ProjectsPage />} />;
			<Route
				path='/portfolio/apartament-industrialny'
				element={<IndustrialApartment />}
			/>
			<Route
				path='/portfolio/apartament-mokotow'
				element={<MokotowApartment />}
			/>
			<Route
				path='/portfolio/mieszkanie-z-cegla'
				element={<BrickApartment />}
			/>
			<Route path='/portfolio/dom-bielany' element={<BielanyHouse />} />;
			<Route path='/portfolio/kawalerka' element={<CenterApartment />} />;
			<Route
				path='/portfolio/kamienica-na-pradze'
				element={<PragaApartment />}
			/>
			;
			<Route path='/oferta' element={<OfferPage />} />;
			<Route path='/kontakt' element={<ContactPage />} />;
			<Route path='/dziekujemy' element={<Thankyou />} />;
		</Routes>
	);
};

export default Page;
