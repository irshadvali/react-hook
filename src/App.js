import React, { useState } from 'react';
import logo from './logo.svg';
import FirstComonent from './componets/FirstComonent';
import CustomForm from './componets/CustomForm';
import BasicUseContext from './componets/BasicUseContext'
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className="App">
			<header className="App-header">
				<div>
					<BasicUseContext/>
				</div>
			</header>
		</div>
	);
}

export default App;
