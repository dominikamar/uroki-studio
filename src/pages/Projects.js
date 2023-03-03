import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.scss';

const SingleProject = (props) => {
	return (
		<div className='single-project'>
			<Link to={props.link}>
				<div className={props.class}>
					<div className='project-button-shadow'>
						<h3 className='project-name'>{props.name}</h3>
						<p className='area'>{props.area}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

const Projects = () => {
	return (
		<div className='wrapper projects-section'>
			<h2 className='section-header'>portfolio</h2>
			<div className='projects-box'>
				<SingleProject
					link='/portfolio/apartament-mokotow'
					class='project-button first-project'
					name='Apartament na Mokotowie'
					area='120 m²'
				/>
				<SingleProject
					link='/portfolio/apartament-industrialny'
					class='project-button second-project'
					name='Industrialny apartament'
					area='83 m²'
				/>
				<SingleProject
					link='/portfolio/kawalerka'
					class='project-button third-project'
					name='Kawalerka w centrum Warszawy'
					area='38 m²'
				/>
				<SingleProject
					link='/portfolio/mieszkanie-z-cegla'
					class='project-button fourth-project'
					name='Mieszkanie z cegłą'
					area='75 m²'
				/>
				<SingleProject
					link='/portfolio/dom-bielany'
					class='project-button fifth-project'
					name='Dom na bielanach'
					area='112 m²'
				/>
				<SingleProject
					link='/portfolio/kamienica-na-pradze'
					class='project-button sixth-project'
					name='Mieszkanie w kamienicy na Pradze'
					area='68 m²'
				/>
			</div>
		</div>
	);
};
export default Projects;
