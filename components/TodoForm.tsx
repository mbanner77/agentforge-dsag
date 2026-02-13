"use client";

import { useState } from "react";

interface TodoFormProps {
  addTodo: (todo: { text: string; category: string; priority: string; dueDate: string }) => void;
}

export default function TodoForm({ addTodo }: TodoFormProps): JSX.Element {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("Mittel");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) return;
    addTodo({
      text,
      category,
      priority,
      dueDate,
    });
    setText("");
    setCategory("");
    setPriority("Mittel");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Neue Aufgabe"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 mb-2 w-full bg-gray-800 border border-gray-700 rounded"
      />
      <input
        type="text"
        placeholder="Kategorie"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 mb-2 w-full bg-gray-800 border border-gray-700 rounded"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="p-2 mb-2 w-full bg-gray-800 border border-gray-700 rounded"
      >
        <option value="Hoch">Hoch</option>
        <option value="Mittel">Mittel</option>
        <option value="Niedrig">Niedrig</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="p-2 mb-2 w-full bg-gray-800 border border-gray-700 rounded"
      />
      <button type="submit" className="bg-indigo-600 px-4 py-2 rounded">
        Hinzufügen
      </button>
    </form>
  );
}