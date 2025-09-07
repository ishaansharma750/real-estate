import React from 'react';
import './Style.css';

export const PropertyCard = ({ property }) => {
	console.log('proper', property);
	return (
		<div className='property-card'>
			<img src={property.image} alt={property.title} className='property-image' />
			<div className='property-details'>
				<div className='property-meta'>
					<span className='property-location'>
						&#x1F4CD; {property.city}, {property.state}
					</span>
					<span className='property-rating'>&#9733; 4.5/5</span> {/* Hardcoded rating if needed */}
				</div>
				<p className='property-description'>Spacious 3BHK apartment in a prime location with modern amenities.</p> {/* Sample desc or property.description */}
				<div className='property-footer'>
					<button className='buy-now-btn'>Buy Now</button>
					<span className='property-price'>$1,500/month</span> {/* Example price formatting */}
				</div>
			</div>
		</div>
	);
};
