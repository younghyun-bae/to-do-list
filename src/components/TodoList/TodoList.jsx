import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {id: '01', text: 'grocery shopping', status: 'active'},
    {id: '02', text: 'studying', status: 'active'},
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);

  return (
    <section>
      <ul>
        {
          todos.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))
        }
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

export default TodoList;