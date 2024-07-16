import React from 'react';
import { AnimatePresence } from 'framer-motion';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, completeTodo, editTodo }) => (
  <div>
    <AnimatePresence>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          editTodo={editTodo}
        />
      ))}
    </AnimatePresence>
  </div>
);

export default TodoList;