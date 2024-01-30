import React from 'react';
import './App.css';

import { TaskItem } from './components/TodoTask/TaskItem';
import { todos } from './mock';

export const App: React.FC = () => {
  return (
      <>
          <h2>My tasks</h2>
          <ol>
              {todos.map((item) => (
                  <TaskItem item={item} key={item.id} />
              ))}
          </ol>
      </>
  );
};
