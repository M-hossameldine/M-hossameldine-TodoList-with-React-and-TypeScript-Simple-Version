import React from 'react';
import Todo from '../models/Todo';

const TodoItem: React.FC<{ item: Todo }> = (props) => {
  const { item } = props;
  return <li> {item.text} </li>;
};

export default TodoItem;
