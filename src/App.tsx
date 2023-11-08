import ToDoList from './components/to-do-list/ToDoList';
import NewToDo from './components/new-to-do/NewToDo';
import ToDosContextProvider from './state/to-dos-context';

const App = () => {
  return (
    <ToDosContextProvider>
      <NewToDo />
      <ToDoList />
    </ToDosContextProvider>
  );
};

export default App;
