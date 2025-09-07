import './Style.css';

import one from '../assets/featured/one.jpg';
import two from '../assets/featured/two.jpg';
import three from '../assets/featured/three.jpg';
import four from '../assets/featured/four.jpg';
export default function Featured() {
	return (
		<section className='featured-section'>
			{/* Header */}
			<div className='featured-header'>
				<h2>Featured Property</h2>
				<button className='see-more'>See 268 New Projects →</button>
			</div>

			{/* Grid layout */}
			<div className='featured-grid'>
				{/* Left big image */}
				<div className='featured-main'>
					<img src={one} alt='Main Property' />
					<div className='featured-overlay'>
						<p>By Finder & Projects</p>
						<h3>Kenanga Residence</h3>
					</div>
				</div>

				{/* Center medium image */}
				<div className='featured-center'>
					<img src={two} alt='Property Center' />
				</div>

				{/* Right stacked images */}
				<div className='featured-side'>
					<img src={three} alt='Property 3' />
					<img src={four} alt='Property 4' />
				</div>
			</div>
		</section>
	);
}





