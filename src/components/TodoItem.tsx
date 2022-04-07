import React from 'react';
import Todo from '../models/Todo';

import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ item: Todo; onRemoveTodo: () => void }> = (
  props
) => {
  const { item } = props;

  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {' '}
      {item.text}{' '}
    </li>
  );
};

export default TodoItem;
