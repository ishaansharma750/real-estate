import { PropertyCard } from './PropertyCards';
import './Style.css';

export default function PropertiesSection({ properties, sell }) {
	// Filter properties by type
	const filteredProperties = (properties || []).filter((prop) => (sell ? prop.propertyType === 'sale' : prop.propertyType === 'rent'));

	// Dynamic headings/subtitles based on sell
	const title = sell ? 'Best Properties Available For Sale' : 'Find The Perfect Rental Home';
	const buttonText = sell ? 'View More Properties' : 'View All Rentals';
	const subtitle = sell
		? 'Browse our top-rated properties for sale, featuring premium listings tailored to your needs. Find your dream home today!'
		: 'Browse our top-rated properties for rent, featuring premium listings tailored to your needs. Find your dream home today!';

	return (
		<section className='properties-section'>
			<div className='properties-header'>
				<div>
					<h2 className='properties-title'>{title}</h2>
					<p className='properties-subtitle'>{subtitle}</p>
				</div>
				<button className='more-properties-btn'>{buttonText}</button>
			</div>
			<div className='properties-scroll-list'>
				{filteredProperties.map((prop, idx) => (
					<PropertyCard key={idx} property={prop} />
				))}
			</div>
		</section>
	);
}
