import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { Todo } from './types';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem key={item.id} id={item.id} todo={item} todos={todos} setTodos={setTodos} />
      ))}
    </ul>
  );
};

export default TodoList;
