import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TodoItem = ({ todo, index, removeTodo, completeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(index, newText);
    setIsEditing(false);
  };

  return (
    <motion.div
      className="todo"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
          {todo.text}
        </span>
      )}
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <>
          <button onClick={() => completeTodo(index)}>
            {todo.isCompleted ? 'Undo' : 'Complete'}
          </button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => removeTodo(index)}>Remove</button>
        </>
      )}
    </motion.div>
  );
};

export default TodoItem;