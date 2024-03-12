import { useEffect, useState } from 'react';
import { useGetTodos, useAddTodo, useUpdateTodos, useDeleteTodos } from './hooks';
import { BlockBtn, SotrBtn, TaskBlock } from './component';
import './App.css';

export const App = () => {
	const { todo, isLoading } = useGetTodos();
	const [newTodo, setNewTodo] = useState([]);

	const { isCreating, requestAddTodos } = useAddTodo();
	const { isUpdating, requestUpdateTodos } = useUpdateTodos();
	const { isDelete, requestDeleteTodos } = useDeleteTodos();

	useEffect(() => {
		setNewTodo(todo);
	}, [todo]);

	const poisc = (value) => {
		let currentTodos = [],
			newList = [];
		if (value !== '') {
			currentTodos = todo;

			newList = currentTodos.filter(({ title }) => {
				const element = title.toLowerCase();
				const filter = value.toLowerCase();

				return element.includes(filter);
			});
		} else {
			newList = todo;
		}
		setNewTodo(newList);
	};

	const sort = () => {
		const sortedTodos = newTodo.sort((a, b) => {
			if (a.title.toLowerCase() < b.title.toLowerCase()) {
				return -1;
			}
			if (a.title.toLowerCase() > b.title.toLowerCase()) {
				return 1;
			}
			return 0;
		});
		setNewTodo(sortedTodos);
		console.log(sortedTodos);
	};

	return (
		<>
			<SotrBtn sort={sort} />
			<TaskBlock poisc={poisc} isLoading={isLoading} newTodo={newTodo} />
			<BlockBtn
				isCreating={isCreating}
				requestAddTodos={requestAddTodos}
				isUpdating={isUpdating}
				isDelete={isDelete}
				requestUpdateTodos={requestUpdateTodos}
				requestDeleteTodos={requestDeleteTodos}
			/>
		</>
	);
};
