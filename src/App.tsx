import { useState } from 'react';

import ToDo from './models/toDo';

import ToDoList from './components/to-do-list/ToDoList';
import NewToDo from './components/new-to-do/NewToDo';

const App = () => {
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

  return (
    <div>
      <NewToDo onAddToDo={handleAddToDo} />
      <ToDoList items={toDoList} handleRemove={handleRemoveToDo} />
    </div>
  );
};

export default App;
