interface TodoItemProps {
  todo: any;
  onToggleCompleted: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleCompleted }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleCompleted(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
    </li>
  );
};

export default TodoItem;