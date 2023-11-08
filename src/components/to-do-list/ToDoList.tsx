import React, { useContext } from 'react';

import { ToDosContext } from '../../state/to-dos-context';

import ToDoItem from '../to-do-item/ToDoItem';

import classes from './ToDoList.module.css';

const ToDoList: React.FC = () => {
  const toDosContext = useContext(ToDosContext);

  return (
    <ul className={classes.list}>
      {toDosContext.toDoList.map((toDo) => (
        <ToDoItem
          key={toDo.id}
          text={toDo.text}
          handleRemove={toDosContext.removeToDo.bind(null, toDo.id)}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
