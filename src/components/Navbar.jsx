import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../state/AuthContext';
import { useState } from 'react';

export default function Navbar() {
	const { user, logout } = useAuth();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="navbar-header">
			<nav className="navbar">
				{/* Logo */}
				<Link to="/" className="navbar-logo">
					<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#222" viewBox="0 0 24 24">
						<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
					</svg>
					PropBot
				</Link>

				{/* Hamburger (visible on mobile) */}
				<button
					className="navbar-toggle"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Toggle menu">
					☰
				</button>

				{/* Links */}
				<div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
					<NavLink to="/" className="nav-item">Home</NavLink>
					<NavLink to="/buy" className="nav-item">Buy</NavLink>
					<NavLink to="/rent" className="nav-item">Rent</NavLink>
					<NavLink to="/sell" className="nav-item">Sell</NavLink>
					<NavLink to="/about" className="nav-item">About Us</NavLink>
					<NavLink to="/contact" className="nav-item">Contact Us</NavLink>

					{/* Auth buttons */}
					{user ? (
						<div className="auth-box">
							<span>{user.email}</span>
							<button onClick={logout} className="btn-logout">Logout</button>
						</div>
					) : (
						<Link to="/login" className="btn-login">Login / Register</Link>
					)}
				</div>
			</nav>
		</header>
	);
}
