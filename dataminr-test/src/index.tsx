import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { schema } from './schema';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<App schema={schema} />
	</React.StrictMode>,
	document.getElementById('root')
);

/**
 * toggle component
 *  Toggle groups vs single toggle
 *
 * dropdown component
 *  could create 2 types for the large dropdown and the small dropdown
 * non-dropdown toggle container
 * Parent < child relationship === users > users add
 * title
 *
 * ***** dynamic schema for text
 * create interface detailing the structure
 * the export json object extending that interface
 *
 *
 *
 *
 *
 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
