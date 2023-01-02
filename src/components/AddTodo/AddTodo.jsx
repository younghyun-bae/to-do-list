import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: 'exclusive', text, statatus: 'active' });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        placeholder='Add Todo' 
        value={text}
        onChange={handleChange}
      />
      <button> + </button>
    </form>
  );
};

export default AddTodo;