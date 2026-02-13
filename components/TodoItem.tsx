"use client";

interface Todo {
  text: string;
  category: string;
  priority: string;
  dueDate: string;
}

interface TodoItemProps {
  todo: Todo;
  removeTodo: () => void;
}

export default function TodoItem({ todo, removeTodo }: TodoItemProps): JSX.Element {
  return (
    <li className="flex justify-between items-center p-2 border-b border-gray-700">
      <div>
        <h2 className="text-xl">{todo.text}</h2>
        <p>Kategorie: {todo.category}</p>
        <p>Priorität: {todo.priority}</p>
        <p>Fällig: {todo.dueDate}</p>
      </div>
      <button onClick={removeTodo} className="bg-red-600 px-2 py-1 rounded">
        Entfernen
      </button>
    </li>
  );
}