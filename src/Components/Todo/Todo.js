import {
	Avatar,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from '@material-ui/core';
import React from 'react';
import './Todo.css';
import db from '../../firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
	return (
		<List>
			<ListItem>
				<ListItemAvatar>
					<Avatar></Avatar>
				</ListItemAvatar>
				<ListItemText primary={props.todo.text} />
				<DeleteForeverIcon
					variant='contained'
					color='secondary'
					onClick={(event) => {
						db.collection('todos').doc(props.todo.id).delete();
					}}
					style={{ cursor: 'pointer' }}
				/>
			</ListItem>
		</List>
	);
}

export default Todo;
