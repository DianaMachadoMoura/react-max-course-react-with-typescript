import { useRef } from 'react';

import classes from './NewToDo.module.css';

const NewToDo: React.FC<{ onAddToDo: (input: string) => void }> = (props) => {
  const toDoInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredInput = toDoInputRef.current!.value;

    if (enteredInput.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddToDo(enteredInput);
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
