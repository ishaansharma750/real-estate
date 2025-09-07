import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { Link, useNavigate } from 'react-router-dom';
import '../components/Style.css'; // Custom styles reference
import login from '../assets/login/login.png';
import toast from 'react-hot-toast';

export default function Signup() {
	const [loginDetails, setLoginDetails] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const { name, email, password, confirmPassword } = loginDetails;

	// Handles input changes for all fields
	const onChange = (e) => setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		setError('');

		if (password !== confirmPassword) {
			setError('Passwords do not match');
			return;
		}

		setLoading(true);
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			toast.success('Registration sucessfully');
			navigate('/login'); // Redirect after signup
		} catch (err) {
			toast.error(err.message);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='auth-root'>
			<div className='auth-container'>
				<div className='auth-form-wrap'>
					<h1 className='auth-title'>Create new account</h1>
					<form className='auth-form' onSubmit={onSubmit}>
						{error && <div className='auth-error'>{error}</div>}

						<label>
							Name
							<div className='input-with-icon'>
								<input type='text' name='name' value={name} placeholder='Enter Your Full Name' autoComplete='name' onChange={onChange} required />
								<span className='input-icon'>&#9993;</span>
							</div>
						</label>

						<label>
							Email Address
							<div className='input-with-icon'>
								<input type='email' name='email' placeholder='Enter Your Email Id' value={email} onChange={onChange} required autoComplete='email' />
								<span className='input-icon'>&#9993;</span>
							</div>
						</label>

						<label>
							Password
							<div className='input-with-icon'>
								<input type='password' name='password' placeholder='Enter Your Password' value={password} onChange={onChange} required autoComplete='new-password' />
								<span className='input-icon'>&#128065;</span>
							</div>
						</label>

						<label>
							Confirm Password
							<div className='input-with-icon'>
								<input
									type='password'
									name='confirmPassword'
									placeholder='Confirm Your Password'
									value={confirmPassword}
									onChange={onChange}
									required
									autoComplete='new-password'
								/>
								<span className='input-icon'>&#128065;</span>
							</div>
						</label>

						<button type='submit' className='auth-submit' disabled={loading}>
							{loading ? 'Creating Account…' : 'Create Account'}
						</button>

						<div className='auth-footer-links'>
							Already have an account?{' '}
							<Link to='/login' className='auth-link'>
								Log In
							</Link>
						</div>
					</form>
				</div>

				<div className='auth-image-wrap'>
					<img className='auth-image' src={login} alt='Modern House' />
				</div>
			</div>
		</div>
	);
}
