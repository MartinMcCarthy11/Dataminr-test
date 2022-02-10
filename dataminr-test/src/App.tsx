import React, { Fragment } from 'react';
import { schema } from './schema';
import type { Section } from './schema';
import './App.css';

interface Props {
	schema: Section[];
}

function App({ schema }: Props) {
	return (
		<>
			<div>
				{schema.map((section) => (
					<Fragment key={section.id}>
						<h1>{section.title}</h1>
						{section.card.map((card) => (
							<Fragment key={card.id}>
								<h2>{card.title}</h2>
								{card.additionalSettings &&
									card.additionalSettings.map((setting) => (
										<Fragment key={setting.id}>
											<h3>{setting.title}</h3>
										</Fragment>
									))}
							</Fragment>
						))}
					</Fragment>
				))}
			</div>
		</>
	);
}

export default App;
