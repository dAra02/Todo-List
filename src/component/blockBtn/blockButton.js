import style from './blockButton.module.css';

export const BlockBtn = ({ isCreating, isUpdating, isDelete, requestAddTodos, requestDeleteTodos, requestUpdateTodos }) => {
	return (
		<div className={style.blockButton}>
			<button disabled={isCreating} onClick={requestAddTodos}>
				Добавить новый список
			</button>
			<button disabled={isUpdating} onClick={requestUpdateTodos}>
				Обновить список
			</button>
			<button disabled={isDelete} onClick={requestDeleteTodos}>
				Удалить список
			</button>
		</div>
	);
};
