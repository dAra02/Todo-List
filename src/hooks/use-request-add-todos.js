import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const useAddTodo = () => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddTodos = () => {
		setIsCreating(true);

		const todoDbRef = ref(db, `Todos/${prompt('id задачи')}`);

		set(todoDbRef, {
			title: prompt('Введите новые дела'),
		})
			.then((response) => {
				console.log('Новый список добавлен, ответ сервера', response);
			})
			.finally(() => setIsCreating(false));
	};
	return {
		isCreating,
		requestAddTodos,
	};
};
