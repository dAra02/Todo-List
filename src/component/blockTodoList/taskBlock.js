import style from './taskBlock.module.css';

export const TaskBlock = ({ poisc, isLoading, newTodo }) => {
	return (
		<div className={style.block}>
			<h3 className={style.zagalovok}>Todo list</h3>
			<input onChange={({ target: { value } }) => poisc(value)} type="text" className={style.poisc} placeholder="Поиск..." />
			{isLoading ? (
				<div className={style.loader}></div>
			) : (
				Object.entries(newTodo).map(([id, { title }]) => (
					<div className={style.todos} key={id}>
						{title}
					</div>
				))
			)}
		</div>
	);
};
