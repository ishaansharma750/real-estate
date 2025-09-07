import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
// import Buy from './pages/Buy';
// import Sell from './pages/Sell';
// Ensure this exists and is imported
// import Listings from './pages/Listings';
import { useAuth } from './state/AuthContext';

function ShowFooterIfAuthenticated() {
	const { user } = useAuth();

	if (!user) return null;

	return (
		<>
			<br />
			<br />
			<Footer />
		</>
	);
}

function App() {
	return (
		<>
			<Navbar />
			<main>
				<Routes>
					{/* Public routes */}
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<SignUp />} />

					{/* Protected routes */}
					<Route
						path='/'
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					{/* Uncomment and add your private pages */}
					{/* <Route
						path='/buy'
						element={
							<ProtectedRoute>
								<Buy />
							</ProtectedRoute>
						}
					/> */}
					{/* <Route
						path='/rent'
						element={
							<ProtectedRoute>
								<Sell />
							</ProtectedRoute>
						}
					/> */}
					{/* Add similar private routes here */}

					{/* Catch-all redirect */}
					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			</main>

			{/* Show Footer only if user is logged in */}
			<ShowFooterIfAuthenticated />
		</>
	);
}

export default App;
