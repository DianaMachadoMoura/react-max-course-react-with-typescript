import React from 'react';

import ToDo from '../../models/toDo';
import ToDoItem from '../to-do-item/ToDoItem';
import classes from './ToDoList.module.css';

const ToDoList: React.FC<{
  items: ToDo[];
  handleRemove: (toDoId: string) => void;
}> = ({ items, handleRemove }) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <ToDoItem
          key={item.id}
          text={item.text}
          handleRemove={handleRemove.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
