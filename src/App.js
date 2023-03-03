import React, { useState } from 'react';
import DesktopNav from './components/DesktopNav';
import { HashRouter as Router } from 'react-router-dom';

import Page from './components/Page';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';

function App() {
	const [pickNav, setPickNav] = useState(window.innerWidth);
	const handleNav = () => {
		setPickNav(() => window.innerWidth);
	};
	window.addEventListener('resize', handleNav);
	return (
		<Router location='/o-nas'>
			<nav>{pickNav <= '992' ? <MobileNav /> : <DesktopNav />}</nav>
			<main>{<Page />}</main>
			<footer>{<Footer />}</footer>
		</Router>
	);
}

export default App;
