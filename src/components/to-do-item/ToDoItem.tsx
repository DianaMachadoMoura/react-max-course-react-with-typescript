import classes from './ToDoItem.module.css';

const ToDoItem: React.FC<{
  text: string;
  handleRemove: () => void;
}> = ({ text, handleRemove }) => {
  return (
    <li className={classes.item} onClick={() => handleRemove()}>
      {text}
    </li>
  );
};

export default ToDoItem;
