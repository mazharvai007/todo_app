import {
	Avatar,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from '@material-ui/core';
import React from 'react';
import './Todo.css';

function Todo(props) {
	return (
		<List>
			<ListItem>
				<ListItemAvatar>
					<Avatar></Avatar>
				</ListItemAvatar>
				<ListItemText primary={props.text} />
			</ListItem>
		</List>
	);
}

export default Todo;
