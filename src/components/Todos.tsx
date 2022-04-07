import Todo from '../models/Todo';
import TodoItem from './TodoItem';

import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item: Todo) => (
        <TodoItem
          key={item.id}
          item={item}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
