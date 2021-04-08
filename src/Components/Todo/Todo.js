import {
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Modal,
	Button,
} from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import './Todo.css';
import db from '../../firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EditIcon from '@material-ui/icons/Edit';

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalPosition() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

function Todo(props) {
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState('');

	/**
	 * Write custom style
	 */
	const useStyles = makeStyles({
		todoItem: {
			width: '100%',
			maxWidth: '400px',
			backgroundColor: '#f5f5f5',
			margin: '1px auto',
		},
		modalStyle: {
			position: 'absolute',
			width: 400,
			backgroundColor: '#fff',
			border: '2px solid #000',
			boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.5)',
			padding: '15px',
		},
	});
	const todoStyle = useStyles();
	const [modalPosition] = React.useState(getModalPosition);

	const updateTodo = () => {
		db.collection('todos')
			.doc(props.todo.id)
			.set({ todo: input }, { merge: true });

		// Close the modal
		setOpen(false);
	};

	return (
		<>
			<Modal open={open} onClose={(e) => setOpen(false)}>
				<div style={modalPosition} className={todoStyle.modalStyle}>
					<h2>Text in a modal</h2>
					<input
						value={input}
						placeholder={props.todo.text}
						onChange={(event) => setInput(event.target.value)}
					/>
					<Button
						varient='outlined'
						color='primary'
						onClick={updateTodo}>
						Update
					</Button>
				</div>
			</Modal>
			<List className={todoStyle.todoItem}>
				<ListItem>
					<ListItemAvatar>
						<CheckCircleIcon
							variant='contained'
							color='primary'></CheckCircleIcon>
					</ListItemAvatar>
					<ListItemText primary={props.todo.text} />
					<EditIcon
						className='editIcon'
						varient='contained'
						color='primary'
						onClick={(e) => setOpen(true)}
					/>
					<DeleteForeverIcon
						className='deleteIcon'
						variant='contained'
						color='secondary'
						onClick={(event) => {
							db.collection('todos').doc(props.todo.id).delete();
						}}
					/>
				</ListItem>
			</List>
		</>
	);
}
export default Todo;
