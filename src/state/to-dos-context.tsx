import React, { useState } from 'react';
import ToDo from '../models/toDo';

type ToDosContextValue = {
  toDoList: ToDo[];
  addToDo: (text: string) => void;
  removeToDo: (id: string) => void;
};

export const ToDosContext = React.createContext<ToDosContextValue>({
  toDoList: [],
  addToDo: () => {},
  removeToDo: (id: string) => {},
});

const ToDosContextProvider: React.FC<{
  children?: React.ReactElement | React.ReactElement[];
}> = (props) => {
  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  const handleAddToDo = (toDoText: string) => {
    const newTodo = new ToDo(toDoText);

    setToDoList((prevToDos) => {
      return prevToDos.concat(newTodo);
    });
  };

  const handleRemoveToDo = (toDoToRemoveId: string) => {
    setToDoList((prevToDos) => {
      return prevToDos.filter((toDo) => toDo.id !== toDoToRemoveId);
    });
  };

  const contextValue: ToDosContextValue = {
    toDoList,
    addToDo: handleAddToDo,
    removeToDo: handleRemoveToDo,
  };

  return (
    <ToDosContext.Provider value={contextValue}>
      {props.children}
    </ToDosContext.Provider>
  );
};

export default ToDosContextProvider;
