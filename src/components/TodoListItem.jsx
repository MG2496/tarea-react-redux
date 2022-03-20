import React from 'react';
import './TodoListItem.css';
import { todoCompleted } from '../storage/actions';

const TodoListItem = ({ todo, onRemovePressed, onTodoCompleted }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
      <button 
        className="completed-button"
        onClick={() => (onTodoCompleted(todo.text))}
        //checked={element.status === 1}
        //
        >Mark as completed
      </button>
      <button
        className="remove-button"
        onClick={() => onRemovePressed(todo.text)}
      >Remove</button>
    </div>
  </div>
);

export default TodoListItem;