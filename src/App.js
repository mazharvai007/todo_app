import { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Components/Todo/Todo';

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
				<FormControl>
					<InputLabel htmlFor='writeTodo'>✅ Write a todo</InputLabel>
					<Input
						id='writeTodo'
						type='text'
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>
				</FormControl>

				<Button
					type='submit'
					onClick={addTodo}
					disabled={!input}
					variant='contained'
					color='primary'>
					Add Todo
				</Button>
			</form>
			<ul>
				{todos.map((todo, index) => (
					<Todo key={index.toString()} text={todo} />
				))}
			</ul>
		</div>
	);
}

export default App;
