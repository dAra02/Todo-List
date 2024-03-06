import { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useDeleteTodos = () => {
	const [isDelete, setIsDelete] = useState(false);

	const requestDeleteTodos = () => {
		setIsDelete(true);

		const removeTodoDbRef = ref(db, `Todos/${prompt('Ввести id заметки для удаления')}`);

		remove(removeTodoDbRef)
			.then((response) => {
				console.log('Списки обновлены, ответ сервера', response);
			})
			.finally(() => setIsDelete(false));
	};

	return {
		isDelete,
		requestDeleteTodos,
	};
};
