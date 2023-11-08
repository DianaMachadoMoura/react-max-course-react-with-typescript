import { useRef, useContext } from 'react';

import { ToDosContext } from '../../state/to-dos-context';

import classes from './NewToDo.module.css';

const NewToDo: React.FC = () => {
  const toDosContext = useContext(ToDosContext);

  const toDoInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredInput = toDoInputRef.current!.value;

    if (enteredInput.trim().length === 0) {
      // throw an error
      return;
    }

    toDosContext.addToDo(enteredInput);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="text">To Do text</label>
      <input type="text" id="id" ref={toDoInputRef} />
      <button>Add To Do</button>
    </form>
  );
};

export default NewToDo;
