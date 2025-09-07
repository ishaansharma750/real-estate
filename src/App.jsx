import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home'; // Ensure this exists and is imported

function App() {
	return (
		<>
			<Navbar />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<SignUp />} />
					<Route
						path='/protected'
						element={
							<ProtectedRoute>
								<div className='section py-16'>Protected content here</div>
							</ProtectedRoute>
						}
					/>
					<Route path='/home' element={<Navigate to='/' replace />} />
				</Routes>
			<Footer />
			</main>
		</>
	);
}

export default App;
