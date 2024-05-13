import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTodo: TodoItem = {
        id: Math.random(),
        text: newTask,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTask("");
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const handleToggleCompleted = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="todo-main-wrapper">
      <div className="todo-wrapper">
        <h1>Todo App</h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
          className="text-input-field"
        />
        <div className="btn-wrapper">
          <button className="add-task" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
      </div>
      <TodoList todos={todos} onToggleCompleted={handleToggleCompleted} />
    </div>
  );
};

export default TodoApp;
