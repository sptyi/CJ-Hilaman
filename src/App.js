import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Components/Title';
import Projects from './Components/Projects';

function App() {
	return (
		<div className='App'>
			<Title />
			<Projects />
		</div>
	);
}

export default App;
