import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: any[];
    onToggleCompleted: (id: number) => void;
  }
  
  const TodoList: React.FC<TodoListProps> = ({ todos, onToggleCompleted }) => {
    return (
      <ul className="todo-list">
        {todos.map((todo:any) => (
          <TodoItem key={todo?.id} todo={todo} onToggleCompleted={onToggleCompleted} />
        ))}
      </ul>
    );
  };
  
  export default TodoList;