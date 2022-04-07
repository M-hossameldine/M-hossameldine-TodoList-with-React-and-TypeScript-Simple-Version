import { useContext } from 'react';

import Todo from '../models/Todo';
import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';

import classes from './Todos.module.css';

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.todos.map((item: Todo) => (
        <TodoItem
          key={item.id}
          item={item}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
