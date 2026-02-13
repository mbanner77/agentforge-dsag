"use client";

import TodoItem from "@/components/TodoItem";
import { memo } from "react";

interface Todo {
  text: string;
  category: string;
  priority: string;
  dueDate: string;
}

interface TodoListProps {
  todos: Todo[];
  removeTodo: (index: number) => void;
}

function TodoList({ todos, removeTodo }: TodoListProps): JSX.Element {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} removeTodo={() => removeTodo(index)} />
      ))}
    </ul>
  );
}

export default memo(TodoList);