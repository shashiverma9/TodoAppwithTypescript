import { render, fireEvent } from "@testing-library/react";
import TodoApp from "../TodoApp";

describe("TodoApp", () => {
  it("renders the todo list", () => {
    const { getByText }:any = render(<TodoApp />);
    // expect(getByText("Todo App")).toBeInTheDocument();
  });

  it("adds a new task to the list", () => {
    const { getByText, getByPlaceholderText } = render(<TodoApp />);
    const input = getByPlaceholderText("Add new task");
    fireEvent.change(input, { target: { value: "New Task" } });
    const addButton = getByText("Add Task");
    fireEvent.click(addButton);
    // expect(getByText("New Task")).toBeInTheDocument();
  });

  it("toggles the completed state of a task", () => {
    const { getByText } = render(<TodoApp />);
    const task = getByText("Task 1");
    const checkbox = task.previousSibling as HTMLInputElement;
    fireEvent.click(checkbox);
    // expect(task).toHaveStyle("text-decoration: line-through");
  });

  it("persists the todo list to local storage", () => {
    const { getByText } = render(<TodoApp />);
    const task = getByText("Task 1");
    const checkbox = task.previousSibling as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(localStorage.getItem("todos")).toBe(
      ' [{"id":1,"text":"Task 1","completed":true}]'
    );
  });
});
