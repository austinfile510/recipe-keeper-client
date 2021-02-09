import React from 'react';
import ReactDOM from 'react-dom';
import AddRecipe from './AddRecipe';
import { BrowserRouter } from 'react-router-dom';

describe('AddRecipe component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<BrowserRouter>
				<AddRecipe />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});
