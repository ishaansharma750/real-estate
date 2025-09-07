import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
			navigate(from, { replace: true });
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className='section py-16 max-w-md'>
			<h1 className='text-2xl font-bold mb-6'>Login</h1>
			<form onSubmit={onSubmit} className='card p-6 space-y-4'>
				{error && <div className='text-red-600 text-sm'>{error}</div>}
				<input className='w-full px-3 py-2 rounded-xl border' placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
				<input
					className='w-full px-3 py-2 rounded-xl border'
					placeholder='Password'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<button disabled={loading} className='w-full px-4 py-2 rounded-xl bg-indigo-600 text-white'>
					{loading ? 'Signing in…' : 'Login'}
				</button>
				<p className='text-sm'>
					No account?{' '}
					<Link to='/signup' className='underline'>
						Signup
					</Link>
				</p>
			</form>
		</section>
	);
}
