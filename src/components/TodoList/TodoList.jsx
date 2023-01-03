import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {id: '01', text: 'grocery shopping', status: 'active'},
    {id: '02', text: 'studying', status: 'active'},
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) => 
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) => 
    setTodos(todos.filter((t) => (t.id !== deleted.id)));
  

  return (
    <section>
      <ul>
        {
          todos.map((item) => (
            <Todo
              key={item.id} 
              todo={item} 
              onUpdate={handleUpdate} 
              onDelete={handleDelete} 
            />
          ))
        }
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

export default TodoList;