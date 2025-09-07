import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './state/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<Toaster/>
				<App />
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
