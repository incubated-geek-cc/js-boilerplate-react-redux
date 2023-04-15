// connecting React --> Redux | mapStateToProps | mapDispatchToProps
// mapStateToProps: Connects a part of the Redux state to the props of a React component.
// Note: The other portion is mapped by Provider
// mapDispatchToProps: Connects redux actions to the props of a React component.
// React component is able to send messages to the store

// ----------------------------------------------------------------------------------

import React from 'react';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './config/store';
import './index.styles.css';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
  	<Provider store={store}>
  		<App />
	</Provider>
);
// Note: Provider enables React app to be aware of the entire Redux store