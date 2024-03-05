import { useEffect, useState } from 'react';
import style from './App.module.css';

export const App = () => {
	const [todo, setTodo] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos', {
			method: 'GET',
		})
			.then((dannie) => {
				return dannie.json();
			})
			.then((todos) => {
				setTodo(todos);
			});
	}, []);

	return (
		<div className={style.App}>
			<h1>Todo list</h1>
			{todo.map(({ id, title }) => (
				<div className={style.todos} key={id}>
					{title}
				</div>
			))}
		</div>
	);
};
