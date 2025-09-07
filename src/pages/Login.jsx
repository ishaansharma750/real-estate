import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../components/Style.css'; // Custom styles reference
import login from '../assets/login/login.png'; // Use your image path
import toast from 'react-hot-toast';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const onSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setLoading(true);
		try {
			await signInWithEmailAndPassword(auth, email, password);
			toast.success('Logged in successfully!');
			navigate(from, { replace: true });
		} catch (err) {
			toast.error(err.message);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='auth-root'>
			{/* Main split layout */}
			<div className='auth-container'>
				{/* Left: Form */}
				<div className='auth-form-wrap'>
					<h1 className='auth-title'>Welcome back</h1>
					<form className='auth-form' onSubmit={onSubmit}>
						{error && <div className='auth-error'>{error}</div>}
						<label>
							Email Address
							<div className='input-with-icon'>
								<input type='email' placeholder='Enter Your Email Id' value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete='email' />
								<span className='input-icon'>&#9993;</span>
							</div>
						</label>
						<label>
							Password
							<div className='input-with-icon'>
								<input
									type='password'
									placeholder='Enter Your Password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									autoComplete='current-password'
								/>
								<span className='input-icon'>&#128065;</span>
							</div>
						</label>
						<button type='submit' className='auth-submit' disabled={loading}>
							{loading ? 'Signing In…' : 'Sign In'}
						</button>
						<div className='auth-footer-links'>
							Don't have an account?{' '}
							<Link to='/signup' className='auth-link'>
								Create one
							</Link>
						</div>
					</form>
				</div>
				{/* Right: Image */}
				<div className='auth-image-wrap'>
					<img className='auth-image' src={login} alt='Modern House' />
				</div>
			</div>
		</div>
	);
}
