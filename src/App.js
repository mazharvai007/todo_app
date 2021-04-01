import { useState } from 'react';
import './App.css';

function App() {
	const [todos, setTodos] = useState([
		'Take a show for walk',
		'Take the rubbish and throw out',
	]);

	return (
		<div className='App'>
			<h1>Hello World</h1>
			<input type='text' />
			<button>Add Todo</button>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
