import { createContext, useState } from 'react';

import Todo from '../models/Todo';

type TodosContextObj = {
  todos: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (todoId: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
  todos: [],
  addTodo: (todoText: string) => {},
  removeTodo: (todoId: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((todo) => todo.id !== todoId);
      return newTodos;
    });
  };

  const contextValue = {
    todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
