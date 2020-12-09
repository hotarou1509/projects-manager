import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* REDUX SETUP */
import store from './redux/configStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);
