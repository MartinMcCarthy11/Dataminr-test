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
 * Check accessibility - run axe test etc
 *
 *
 *
 *Bugs:
  arrow changes dierection when toggle set to false
 */
