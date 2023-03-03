import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Offer.scss';

const steps = [
	{
		id: 1,
		step: 1,
		header: 'Aranżacja wnętrza',
		texts: [
			{
				id: 1,
				text: 'Inwentaryzacja wnętrza obejmująca szczegółowe pomiary i zdjęcia - w przypadku braku możliwości wykonania inwentaryzacji przed rozpoczęciem projektu, można ją wykonać na późniejszym etapie.',
			},
			{
				id: 2,
				text: 'Ankieta, która przybliża mi potrzeby, przyzwyczajenia i wymagania domowników. Zawarte w niej odpowiedzi stanowią bazę, na podstawie której przygotowuję dalsze części projektu',
			},
			{
				id: 3,
				text: 'Omówienie inspiracji Klienta, które pozwalają mi lepiej zrozumieć jego styl i gust. Tutaj zasada brzmi: Im więcej tym lepiej!',
			},
			{
				id: 4,
				text: 'Aranżacja wnętrza, czyli układ funkcjonalny, na którym zaznaczona jest lokalizacja mebli, sprzętów oraz całego wyposażenia. Układ każdego pomieszczenia pokazywany jest w dwóch- trzech wersjach.',
			},
			{
				id: 5,
				text: 'Moodboard zawiera inspiracje dotyczące danego projektu - kolory, tekstury, paletę materiałów i po raz pierwszy pozwala poczuć klimat projektowanego wnętrza.',
			},
		],
	},
	{
		id: 2,
		step: 2,
		header: 'Wizualizacje wnętrz',
		texts: [
			{
				id: 1,
				text: 'Model 3D i wygenerowane z niego wizualizacje przedstawiają przyszły wygląd pomieszczeń. Wizualizacje uwzględniają wytyczne omówione na poprzednim etapie, inspiracje oraz materiały z moodboarda.',
			},
			{
				id: 2,
				text: 'W ramach pracy nad projektem przewidziane są 3 propozycje wizualizacji, czyli 2 rundy poprawek, które pozwalają jak najbardziej dopasować projekt do oczekiwań Klienta.',
			},
			{
				id: 3,
				text: 'Razem z wizualizacjami wysyłane są linki do elementów, które się na nich znalazły. Tym sposobem, od samego początku pracy nad projektem mam świadomość co podoba się Klientowi, a co mogłabym zastąpić innymi propozycjami.',
			},
			{
				id: 4,
				text: 'Wyposażenie użyte na wizualizacjach to elementy, które są dostępne w sklepach i zawierają się w ustalonym wcześniej budżecie. Dzięki temu, przyszły, zrealizowany projekt może wyglądać dokładnie tak, jak wizualizacje.',
			},
		],
	},
	{
		id: 3,
		step: 3,
		header: 'Rysunki budowlane',
		texts: [
			{
				id: 1,
				text: 'Inwentaryzacja',
			},
			{
				id: 2,
				text: 'Finalny układ funkcjonalny',
			},
			{
				id: 3,
				text: 'Wyburzenia ścian i ściany projektowane',
			},
			{
				id: 4,
				text: 'Projektowane zabudowy g-k',
			},
			{
				id: 5,
				text: 'Projekt sufitów podwieszanych (jeśli występują)',
			},
			{
				id: 6,
				text: 'Projekt instalacji hydraulicznych',
			},
			{
				id: 7,
				text: 'Projekt instalacji elektrycznych oraz oświetlenia',
			},
			{
				id: 8,
				text: 'Projekt posadzek',
			},
			{
				id: 9,
				text: 'Projekt okładzin ściennych',
			},
		],
	},
	{
		id: 4,
		step: 4,
		header: 'Rysunki szczegółowe',
		texts: [
			{
				id: 1,
				text: 'Szczegółowe rysunki wykończenia ścian łazienek i kuchni.',
			},
			{
				id: 2,
				text: 'Detale architektoniczne elementów wykończeniowych np. sposób montażu szkła kabiny prysznicowej, sposób wykończenia płytek, sposób łączenia materiałów wykończeniowych itp.',
			},
			{
				id: 3,
				text: 'Rysunki szczegółowe wszystkich zabudów meblowych - szczegółowy projekt dla stolarza, na podstawie którego może wykonać wszystkie meble (np. zabudowa kuchenna, szafki łazienkowe, szafy itp.)',
			},
			{
				id: 4,
				text: 'Rysunki szczegółowe dla pozostałych podwykonawców: szklarza (np. kabina prysznicowe,lustra ścienne itp.), kamieniarza (np. blaty, okładziny ścienne), ślusarza (np . balustrada, stalowe konstrukcje itp. jeśli występują)',
			},
		],
	},
	{
		id: 5,
		step: 5,
		header: 'Kosztorys',
		texts: [
			{
				id: 1,
				text: 'Zestawienie wszystkich elementów wykończeniowych w formie tabeli w Excelu. Znajduje się w  nim wycena wszystkich elementów wyposażenia zastosowanych w projekcie.',
			},
		],
	},
];

const Stages = () => {
	const stages = steps.map((stage) => {
		const texts = stage.texts;
		return (
			<div className='single-stage' key={stage.id}>
				<div className='header-box'>
					<p className='stage-number'>{stage.step}</p>
					<h3 className='stage-header'>{stage.header}</h3>
				</div>
				<ul className='stage-ul'>
					{texts.map((text) => {
						return (
							<li className='stage-li' key={text.id}>
								{text.text}
							</li>
						);
					})}
				</ul>
			</div>
		);
	});

	return <div>{stages}</div>;
};

const FullOption = () => {
	return (
		<div className='single-option'>
			<h3 className='option-header'>Projekt kompleksowy</h3>
			<p className='option-paragraph'>
				Opcja dla Klientów, którzy potrzebują pomocy na każdym etapie projektu,
				chcą mieć zaplanowaną przestrzeń od A do Z i pragną w pełni zdać się na
				pomoc doświadczonych architektów.
			</p>
			<p className='content-paragraph'>W skład projektu wchodzi:</p>
			<ul className='option-ul'>
				<li className='option-li'>Inwentaryzacja</li>
				<li className='option-li'>Układ funkcjonalny</li>
				<li className='option-li'>Wizualizacje</li>
				<li className='option-li'>Rysunki budowlane</li>
				<li className='option-li'>Rysunki szczegółowe</li>
				<li className='option-li'>Kosztorys</li>
			</ul>
		</div>
	);
};
const MidOption = () => {
	return (
		<div className='single-option'>
			<h3 className='option-header'>Projekt budowlany</h3>
			<p className='option-paragraph'>
				Opcja dla osób, które nie oczekują szczegółowych rysunków dla
				podwykonawców. Wiaże się to z większą odpowiedzialnością i koniecznością
				częstych kontroli na budowie, ale daje ogromną satysfakcję po
				zakończonym remoncie.
			</p>
			<p className='content-paragraph'>W skład projektu wchodzi:</p>
			<ul className='option-ul'>
				<li className='option-li'>Inwentaryzacja</li>
				<li className='option-li'>Układ funkcjonalny</li>
				<li className='option-li'>Wizualizacje</li>
				<li className='option-li'>Rysunki budowlane</li>
			</ul>
		</div>
	);
};
const BasicOption = () => {
	return (
		<div className='single-option'>
			<h3 className='option-header'>Projekt koncepcyjny</h3>
			<p className='option-paragraph'>
				Opcja najbardziej podstawowa, dla Klientów, którzy potrzebują jedynie
				nakierowania, jak urządzić ich przestrzeń by była funkcjonalna i piękna.
				Wskazany styl na wizualizacjach pozwala odtworzyć wnętrze, z możliwością
				wprowadzania własnych zmian i improwizacji na każdym etapie realizacji.
			</p>
			<p className='content-paragraph'>W skład projektu wchodzi:</p>
			<ul className='option-ul'>
				<li className='option-li'>Inwentaryzacja</li>
				<li className='option-li'>Układ funkcjonalny</li>
				<li className='option-li'>Wizualizacje</li>
			</ul>
		</div>
	);
};
const Options = () => {
	return (
		<div className='options'>
			<BasicOption />
			<MidOption />
			<FullOption />
		</div>
	);
};
const Offer = () => {
	return (
		<div className='wrapper offer-section'>
			<h2 className='section-header'>Oferta</h2>
			<p className='offer-paragraph'>
				Poniżej przedstawiono wszystkie możliwe etapy projektu w wersji
				kompleksowej. Następnie wyszczególnione są możliwe konfiguracje
				współpracy i ich dokładny zakres.
			</p>
			<div>
				<Stages />
				<Options />
			</div>
			<p className='finish-paragraph'>
				W sprawie wyceny prosimy o <Link to='/kontakt'>kontakt mailowy.</Link>
			</p>
		</div>
	);
};
export default Offer;
