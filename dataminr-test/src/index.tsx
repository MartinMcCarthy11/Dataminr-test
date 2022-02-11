import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './base.css';
import { schema } from './schema';

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
 * Check accessibility - run axe test etc
 *
 *
 *
 *Bugs:
  arrow changes dierection when toggle set to false
 */
