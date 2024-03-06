import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const useGetTodos = () => {
	const [todo, setTodo] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const todoDbRef = ref(db, 'Todos');

		return onValue(todoDbRef, (snapshot) => {
			const todos = snapshot.val() || {};

			setTodo(todos);
			setIsLoading(false);
		});
	}, []);

	return {
		todo,
		isLoading,
	};
};
