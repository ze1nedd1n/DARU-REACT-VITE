import React from 'react';
import { TodoTask } from '../../types';
import { PhotoItem } from './PhotoItem';

type TaskItemProps = {
    item: TodoTask;
    DoneClick: () => void;
    DeleteClick: () => void;
};



export const TaskItem: React.FC<TaskItemProps> = ({ item, DoneClick, DeleteClick }) => {
    const { completed, title } = item;

    const status = completed ? 'Done' : 'Todo';

    const handleDoneClick = () => {
        DoneClick();
    }

    return (
        <li>
            <h3>{title}</h3>
            <div>Status: {status}</div>
            <PhotoItem item={item}   />
            {!completed && <button onClick={handleDoneClick}> Mark Is Done </button>}
            <button onClick={() => DeleteClick()}>Delete</button>
        </li>
    );
};