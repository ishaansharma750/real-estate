import { FaChartBar, FaKey, FaRobot, FaLock } from 'react-icons/fa';
import './Style.css';

export default function WhatWeDo() {
	const cards = [
		{
			icon: <FaChartBar size={32} color='#2541B2' />,
			title: 'Buy & Sell Properties',
			description: 'Find verified homes for sale or list your property with ease.',
		},
		{
			icon: <FaKey size={32} color='#2541B2' />,
			title: 'Find Rental Homes',
			description: 'Browse through thousands of rental options suited to your needs.',
		},
		{
			icon: <FaRobot size={32} color='#2541B2' />,
			title: 'Smart AI Property Search',
			description: 'Get instant recommendations based on your budget & location.',
		},
		{
			icon: <FaLock size={32} color='#2541B2' />,
			title: 'Safe & Secure Transactions',
			description: 'Verified listings & secure deals to ensure a smooth experience.',
		},
	];

	return (
		<section className='whatwedo-section'>
			<br></br>
			<h2 className='whatwedo-title'>What We Do?</h2>
			<p className='whatwedo-subtitle'>Helping you find, buy, and rent the perfect property with ease.</p>

			<div className='whatwedo-grid'>
				{cards.map(({ icon, title, description }, i) => (
					<div key={i} className='whatwedo-card'>
						<div className='whatwedo-icon'>{icon}</div>
						<h3 className='whatwedo-card-title'>{title}</h3>
						<p className='whatwedo-card-text'>{description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
