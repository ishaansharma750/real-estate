import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../state/AuthContext';
import { useState } from 'react';
import './Style.css';

export default function Navbar() {
	const { user, logout } = useAuth();
	const [menuOpen, setMenuOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const authPages = ['/login', '/signup'];
	const onAuthPage = authPages.includes(location.pathname);

	return (
		<header className='navbar-header'>
			<nav className='navbar'>
				{/* Logo */}
				<Link to='/' className='navbar-logo'>
					<svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' fill='#222' viewBox='0 0 24 24'>
						<path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
					</svg>
					PropBot
				</Link>

				{/* Hamburger toggle, only visible if logged in and not on auth pages */}
				{user && !onAuthPage && (
					<button className='navbar-toggle' onClick={() => setMenuOpen(!menuOpen)} aria-label='Toggle menu'>
						☰
					</button>
				)}

				{/* Navigation Links */}
				<div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
					{/* Show Buy, Rent, Sell only if logged in AND not on login/signup */}
					{user && !onAuthPage && (
						<>
							<NavLink to='/buy' className='nav-item'>
								Buy
							</NavLink>
							<NavLink to='/rent' className='nav-item'>
								Rent
							</NavLink>
							<NavLink to='/sell' className='nav-item'>
								Sell
							</NavLink>
							<NavLink to='/about' className='nav-item'>
								About Us
							</NavLink>
							<NavLink to='/contact' className='nav-item'>
								Contact Us
							</NavLink>
						</>
					)}

					{/* If not logged in on auth pages, show minimal nav */}
					{!user && onAuthPage && (
						<>
							{/* Back button for auth pages */}
							<button className='auth-back' onClick={() => navigate('/')}>
								<span className='arrow'>&#8592;</span> Back to Homepage
							</button>
							<NavLink to='/about' className='nav-item about-btn'>
								About Us <span className='arrow'>&#8594;</span>
							</NavLink>
						</>
					)}

					{/* Auth buttons */}
					{user ? (
						<div className='auth-box'>
							<span>{user.email}</span>
							<button onClick={logout} className='btn-logout'>
								Logout
							</button>
						</div>
					) : (
						!onAuthPage && (
							<>
								<NavLink to='/login' className='btn-login'>
									Login
								</NavLink>
								<NavLink to='/signup' className='btn-login'>
									Sign Up
								</NavLink>
							</>
						)
					)}
				</div>
			</nav>
		</header>
	);
}
