import './Style.css';
import one from '../assets/newsletter/one.jpg';
import two from '../assets/newsletter/two.jpg';
import vector from '../assets/newsletter/vector.jpg';
import map from '../assets/newsletter/map.jpg';
import trust from '../assets/newsletter/trust.jpg';

export default function Newsletter() {
	return (
		<section className='journey-section'>
			<div className='journey-top-row'>
				<div className='journey-titles'>
					<h2>Start Your Journey Today!</h2>
					<p>Create a profile in seconds and find your ideal home.</p>
				</div>
			</div>
			<form className='journey-form'>
				<input type='text' placeholder='Enter Your Name' />
				<select>
					<option>Select User Type</option>
					<option>Buyer</option>
					<option>Renter</option>
					<option>Agent</option>
				</select>
				<input type='text' placeholder='Enter Your Location' />
				<button type='submit'>Continue</button>
			</form>

			{/* Bottom area: Images left, text right */}
			<div className='journey-bottom'>
				<div className='journey-images'>
					<img src={one} alt='Property 1' className='img-back' />
					<img src={two} alt='Property 2' className='img-front' />
				</div>
				<div className='journey-content'>
					<h1>We Provide Latest Properties For Our Valuable Clients</h1>
					<ul className='features'>
						<li>
							<img src={vector} className='icon' />
							<div>
								<h3>Budget Friendly</h3>
								<p>Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.</p>
							</div>
						</li>
						<li>
							<img src={trust} className='icon' />
							<div>
								<h3>Trusted By Thousand</h3>
								<p>Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.</p>
							</div>
						</li>
						<li>
							<img src={map} className='icon' />
							<div>
								<h3>Prime Location</h3>
								<p>Lorem ipsum dolor sit a met consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
