import React, { useRef } from 'react';
import styled from 'styled-components';

import { Todo } from './types';

const FormWrapper = styled.div`
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  outline: none;
  border: none;
  padding-left: 10px;
  margin-top: 10px;
  font-size: 18px;
`;
const AddBtn = styled.button`
  margin-left: 10px;
  padding: 12px;
  background-color: #5ed2f3;
  border-radius: 5px;
  border: none;
`;

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Form: React.FC<Props> = ({ todos, setTodos }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (inputRef.current) {
      const todo = inputRef.current.value;
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      inputRef.current.value = '';
    }
  };

  const handleClickBtn = () => {
    addTodo();
  };

  const handleKeyUp = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };
  return (
    <FormWrapper>
      <Input
        type="text"
        placeholder="Add your task.."
        ref={inputRef}
        onKeyUp={handleKeyUp}
      />
      <AddBtn onClick={handleClickBtn}>Add</AddBtn>
    </FormWrapper>
  );
};

export default Form;
