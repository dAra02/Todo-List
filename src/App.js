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
