import ToDo from './models/toDo';

import ToDoList from './components/to-do-list/ToDoList';

const App = () => {
  const toDoList = [new ToDo('Learn React'), new ToDo('Learn TypeScript')];

  return (
    <div>
      <ToDoList items={toDoList} />
    </div>
  );
};

export default App;
