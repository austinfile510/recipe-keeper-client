import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecipeListProvider } from './contexts/RecipeListContext'
import App from './App';
import './index.css';

ReactDOM.render(
	<BrowserRouter>
	<RecipeListProvider>
		<App />
		</RecipeListProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
