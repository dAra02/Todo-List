import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const useUpdateTodos = () => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateTodos = () => {
		setIsUpdating(true);

		const todoDbRef = ref(db, `Todos/${prompt('Ввести id заметки')}`);

		set(todoDbRef, {
			title: prompt('Изменить заметку'),
		})
			.then((response) => {
				console.log('Списки обновлены, ответ сервера', response);
			})
			.finally(() => setIsUpdating(false));
	};

	return {
		isUpdating,
		requestUpdateTodos,
	};
};
