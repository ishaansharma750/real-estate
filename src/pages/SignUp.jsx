import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();
		setError('');
		if (password !== confirm) {
			setError('Passwords do not match');
			return;
		}
		setLoading(true);
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			// Name could be saved to Firestore or updated on profile if needed
			navigate('/login');
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className='section py-16 max-w-md'>
			<h1 className='text-2xl font-bold mb-6'>Signup</h1>
			<form onSubmit={onSubmit} className='card p-6 space-y-4'>
				{error && <div className='text-red-600 text-sm'>{error}</div>}
				<input className='w-full px-3 py-2 rounded-xl border' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} required />
				<input className='w-full px-3 py-2 rounded-xl border' placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
				<input
					className='w-full px-3 py-2 rounded-xl border'
					placeholder='Password'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<input
					className='w-full px-3 py-2 rounded-xl border'
					placeholder='Confirm Password'
					type='password'
					value={confirm}
					onChange={(e) => setConfirm(e.target.value)}
					required
				/>
				<button disabled={loading} className='w-full px-4 py-2 rounded-xl bg-indigo-600 text-white'>
					{loading ? 'Creating account…' : 'Create account'}
				</button>
				<p className='text-sm'>
					Already have an account?{' '}
					<Link to='/login' className='underline'>
						Login
					</Link>
				</p>
			</form>
		</section>
	);
}
