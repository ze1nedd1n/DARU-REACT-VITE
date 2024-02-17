import React, { useState } from 'react';
import './App.css';

import { TaskItem } from './components/TodoTask/TaskItem';
import { todos } from './mock';

export const App: React.FC = () => {

    const [todoList, setTodoList] = useState(todos);
    const [newTaskName, setNewTaskName] = useState('');
    const [newImg, setNewImg] = useState('');

    const handleTodoDoneClick = (id: number) => {
        const newTodoList = todoList.map(item => 
            item.id === id 
            ? {
            ...item,
            completed: true
              }
            :item
        );
        setTodoList(newTodoList);

    }
    const handleDeleteClick = (id: number) => {
        const newTodoList = (todoList.filter((item) => item.id !== id));
        setTodoList(newTodoList);
    }

    const AddClick = () => {
        const newTodoList = [...todoList, {
            userId: 100,
            id: todoList.length + 1,
            title: newTaskName,
            completed: false,
            url: newImg,
        }];
        setTodoList(newTodoList);
        setNewTaskName("");
        setNewImg("");

    }
    return (
      <>
          <h2>My tasks</h2>
          <div>
            <input 
                type="text" 
                value={newTaskName}
                placeholder='New task' 
                onChange={(e) => setNewTaskName(e.target.value)} />
            <input 
                type="text" 
                value={newImg}
                placeholder='URL Image ' 
                onChange={(e) => setNewImg(e.target.value)} />
            
            <button title='button' onClick={AddClick}>Add</button>
          </div>
          <ol>
              {todoList.map((item) => (
                  <TaskItem 
                  item={item} 
                  key={item.id} 
                  DoneClick={() => handleTodoDoneClick(item.id)} 
                  DeleteClick={() => handleDeleteClick(item.id)}/>
              ))}
          </ol>
      </>
    );
};
