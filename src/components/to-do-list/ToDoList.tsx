import React from 'react';

import ToDo from '../../models/toDo';

import ToDoItem from '../to-do-item/ToDoItem';

const ToDoList: React.FC<{ items: ToDo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        //
        <ToDoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default ToDoList;
