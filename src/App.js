import { useState } from 'react';
import './App.css';

function App() {
	const [todos, setTodos] = useState([
		'Take a show for walk',
		'Take the rubbish and throw out',
	]);
	const [input, setInput] = useState('');

	return (
		<div className='App'>
			<h1>Hello World</h1>
			<input
				type='text'
				value={input}
				onChange={(event) => setInput(event.target.value)}
			/>
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
