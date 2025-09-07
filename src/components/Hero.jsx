import React from 'react';
import heroImage from '../assets/navbar/heroImage.jpg'; // replace with your actual image
import './Style.css';

export default function HeroSection() {
	return (
		<section className='hero-section'>
			{/* Background */}
			<img src={heroImage} alt='Dream Home' className='hero-bg' />

			{/* Overlay: Title + Subtitle */}
			<div className='hero-overlay'>
				<h1 className='hero-title'>Find Your Dream Home in One Click!</h1>
				<p className='hero-subtitle'>Discover, Buy, or Rent Verified Properties with Ease.</p>
			</div>

			{/* Search bar + List button (moved to bottom of image) */}
			<div className='hero-search-container'>
				<div className='hero-search-box'>
					<span className='hero-search-icon'>🔍</span>
					<input type='search' placeholder='Search Location...' />
				</div>
				<button className='btn-list'>List Your Property</button>
			</div>

			{/* Bottom filter bar */}
			<div className='hero-filter-bar'>
				<select>
					<option>For Rent</option>
					<option>For Sale</option>
				</select>

				<select>
					<option>House</option>
					<option>Apartment</option>
					<option>Condo</option>
				</select>

				<select>
					<option>Indonesia</option>
					<option>USA</option>
					<option>UK</option>
				</select>

				<button className='btn-find'>Find Property</button>
			</div>
		</section>
	);
}
