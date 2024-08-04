"use client";
import { useState } from 'react';
import Image from "next/image";

export function TodoList({ todos }) {
  return (
    <div className="todoContainer">
      <ul className="myUl" id="myUl">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export function AddBtn({ addTodo }) {
  return (
    <div>
      <button onClick={addTodo}>
        +
      </button>
    </div>
  );
}

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, 'test']);
  };

  return (
    <main>
      <p>TODOS</p>
      <TodoList todos={todos} />
      <AddBtn addTodo={addTodo} />
    </main>
  );
}
