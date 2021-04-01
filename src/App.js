import { useState } from 'react';
import './App.css';

function App() {
	const [todos, setTodos] = useState([
		'Take a show for walk',
		'Take the rubbish and throw out',
	]);
	const [input, setInput] = useState('');

	const addTodo = (event) => {
		// Will stop the refresh
		event.preventDefault();

		// It will be fire of when we will click on the button
		setTodos([...todos, input]);

		// Clearup the input field after click on the button
		setInput('');
	};

	return (
		<div className='App'>
			<h1>Hello World</h1>
			<form>
				<input
					type='text'
					value={input}
					onChange={(event) => setInput(event.target.value)}
				/>
				<button type='submit' onClick={addTodo}>
					Add Todo
				</button>
			</form>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
