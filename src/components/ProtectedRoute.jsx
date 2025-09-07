import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../state/AuthContext';

export default function ProtectedRoute({ children }) {
	const { user, loading } = useAuth();
	const location = useLocation();
	if (loading) return <div className='section py-20'>Loading...</div>;
	if (!user) return <Navigate to='/login' state={{ from: location }} replace />;
	return children;
}
