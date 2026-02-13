"use client";

import { useState, useEffect } from "react";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";

interface Todo {
  text: string;
  category: string;
  priority: string;
  dueDate: string;
}

export default function TodoApp(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) as Todo[] : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl mb-4">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}