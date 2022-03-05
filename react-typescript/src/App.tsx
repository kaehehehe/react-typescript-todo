import React, { useState } from 'react';

import Form from './components/Form';
import { Todo } from './components/types';
import TodoList from './components/TodoList';
import  Header from './components/Header';
import GlobalStyle from './GlobalStyle';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <GlobalStyle />
      <div className="todo-list">
        <Header />
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default App;
