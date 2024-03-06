import { useEffect, useState } from 'react';
import { useGetTodos, useAddTodo, useUpdateTodos, useDeleteTodos } from './hooks';
import { BlockBtn, SotrBtn, TaskBlock } from './component';
import './App.css';

export const App = () => {
	const [refrechTodos, setRefrechTodos] = useState(false);

	const refrechTod = () => setRefrechTodos(!refrechTodos);

	const { todo, isLoading } = useGetTodos(refrechTodos);
	const [newTodo, setNewTodo] = useState([]);

	const { isCreating, requestAddTodos } = useAddTodo(refrechTod);
	const { isUpdating, requestUpdateTodos } = useUpdateTodos(refrechTod);
	const { isDelete, requestDeleteTodos } = useDeleteTodos(refrechTod);

	useEffect(() => {
		setNewTodo(todo);
	}, [todo]);

	const poisc = (value) => {
		let currentTodos = [],
			newList = [];
		if (value !== '') {
			currentTodos = todo;

			newList = currentTodos.filter((todo) => {
				const element = todo.title.toLowerCase();
				const filter = value.toLowerCase();

				return element.includes(filter);
			});
		} else {
			newList = todo;
		}
		setNewTodo(newList);
	};

	const sort = () => {
		let list, i, perestanovka, taskBlock, sleduetPerekl;
		list = document.getElementById('1');
		perestanovka = true;

		while (perestanovka) {
			perestanovka = false;
			taskBlock = list.getElementsByTagName('div');

			for (i = 0; i < taskBlock.length - 1; i++) {
				sleduetPerekl = false;
				if (taskBlock[i].innerHTML.toLowerCase() > taskBlock[i + 1].innerHTML.toLowerCase()) {
					sleduetPerekl = true;
					break;
				}
			}
			if (sleduetPerekl) {
				taskBlock[i].parentNode.insertBefore(taskBlock[i + 1], taskBlock[i]);
				perestanovka = true;
			}
		}
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
