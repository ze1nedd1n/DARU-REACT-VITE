import React from 'react';
import { TodoTask } from '../../types';

type TaskItemProps = {
    item: TodoTask;
};

export const TaskItem: React.FC<TaskItemProps> = ({ item }) => {
    const { completed, title } = item;

    const status = completed ? 'Done' : 'Todo';

    return (
        <li>
            <h3>{title}</h3>
            <div>Status: {status}</div>
        </li>
    );
};
