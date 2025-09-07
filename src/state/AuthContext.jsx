// src/state/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../services/firebase';

// Create context
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	const [user, setUser] = useState(() => {
		const saved = localStorage.getItem('authUser');
		return saved ? JSON.parse(saved) : null;
	});
	const [loading, setLoading] = useState(true);

	// Listen to Firebase auth state (runs whenever login/logout happens)
	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (firebaseUser) => {
			if (firebaseUser) {
				const minimalUser = {
					uid: firebaseUser.uid,
					email: firebaseUser.email,
				};
				setUser(minimalUser);
				localStorage.setItem('authUser', JSON.stringify(minimalUser));
			} else {
				setUser(null);
				localStorage.removeItem('authUser');
			}
			setLoading(false);
		});

		return () => unsub();
	}, []);

	// logout helper
	const logout = async () => {
		await signOut(auth);
	};

	return <AuthContext.Provider value={{ user, setUser, loading, logout }}>{children}</AuthContext.Provider>;
}

// Custom hook to use anywhere
export const useAuth = () => useContext(AuthContext);
