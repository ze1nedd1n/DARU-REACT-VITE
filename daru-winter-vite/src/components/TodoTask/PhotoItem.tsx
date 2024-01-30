import React from 'react';
import { TodoTask } from '../../types';

type PhotoProps = {
    item: TodoTask;
}

export const PhotoItem: React.FC<PhotoProps> = ({item}) => {
    const {url} = item;

    return (
        <img src={url} alt="img"/>
    )

};