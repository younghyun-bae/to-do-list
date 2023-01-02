import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {id: '01', text: 'grocery shopping', status: 'active'},
    {id: '02', text: 'studying', status: 'active'},
  ]);

  return (
    <section>
      <ul>
        {
          todos.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))
        }
      </ul>
    </section>
  );
};

export default TodoList;