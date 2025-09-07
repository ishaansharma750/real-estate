import React from 'react';
import './Style.css';

export default function Footer() {
	return (
		<footer className='footer-container'>
			<div className='footer-top'>
				<h2 className='footer-title'>Get in Touch with Us</h2>
				<p className='footer-subtitle'>Subscribe now for exclusive property insights and deals!</p>
				<form className='subscribe-form'>
					<input type='email' placeholder='Enter your email' required />
					<button type='submit'>Submit</button>
				</form>

				<div className='footer-bottom'>
					<div className='footer-left'>
						<span className='footer-logo'>🏠 PropBot</span>
					</div>
					<div className='footer-links'>
						<a href='/'>For Sale</a>
						<a href='/'>Rentals</a>
						<a href='/'>New Projects</a>
						<a href='/'>Property News</a>
					</div>
					<div className='footer-right'>© {new Date().getFullYear()} Propbot. All rights reserved</div>
				</div>
			</div>
		</footer>
	);
}
