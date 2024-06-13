import React from 'react';
import  { TodoItem } from './TodoItem';

export default function Todos({ todos, onDelete }) {
  return (
    <div className='container my-2'>
      <h3 className='my-3'>Todos</h3>
      {todos.length === 0 ? "No Todos to display" :
        todos.map((todo) => (
          <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} />
        ))
      }
    </div>
  );
}
