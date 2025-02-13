export default function List({ todos, toggleTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} className="todo-item">
                    <input
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={() => toggleTodo(todo.id)}
                        className="todo-checkbox"
                    />
                    <span style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
                        {todo.text}
                    </span>
                </li>
            ))}
        </ul>
    );
}
