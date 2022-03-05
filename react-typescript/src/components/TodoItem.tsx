import React, { useState, useRef, useEffect } from 'react';
import { FaTrashAlt, FaCheck, FaEdit } from 'react-icons/fa';
import styled from 'styled-components';

import { Todo } from './types';

interface Props {
  id: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

interface TextProps {
  isFinished: boolean;
}

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px;
`;

const EditInput = styled.input`
  outline: none;
  border: none;
  font-size: 18px;
  padding-left: 10px;
`;

const Text = styled.p<TextProps>`
  font-size: 18px;
  text-decoration: ${({ isFinished }) =>
    isFinished ? 'line-through' : 'none'};
`;

const Icons = styled.div`
  display: flex;
`;

const EditIcon = styled.div`
  cursor: pointer;
  font-size: 18px;
  margin-right: 15px;

  &:hover {
    opacity: 0.5;
  }
`;

const CheckIcon = styled(EditIcon)``;

const DeleteIcon = styled(EditIcon)``;

const TodoItem: React.FC<Props> = ({ id, todo, todos, setTodos }) => {
  const [inputValue, setInputValue] = useState(todo.todo);
  const [isFinished, setIsFinished] = useState(todo.isDone);
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [editMode]);

  const handleDelete = () => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleDone = () => {
    setIsFinished(!isFinished);
    todos.map((todo) => {
      if (todo.id === id) {
        return { id, todo, isDone: !isFinished };
      }
    });
  };

  const handleEdit = () => {
    if (isFinished) return;
    setEditMode(!editMode);
    todos.map((todo) => {
      if (todo.id === id && inputRef.current) {
        inputRef.current.focus();
        setInputValue(inputRef.current.value);
        return { id, todo: inputRef.current.value, isDone: false };
      }
    });
  };

  return (
    <Item>
      {editMode ? (
        <EditInput
          defaultValue={inputValue}
          ref={inputRef}
          onBlur={handleEdit}
        />
      ) : (
        <Text isFinished={isFinished} onClick={handleEdit}>
          {inputValue}
        </Text>
      )}

      <Icons>
        <EditIcon>
          <FaEdit style={{ marginRight: '35x' }} onClick={handleEdit} />
        </EditIcon>
        <CheckIcon>
          <FaCheck onClick={handleDone} />
        </CheckIcon>
        <DeleteIcon>
          <FaTrashAlt onClick={handleDelete} />
        </DeleteIcon>
      </Icons>
    </Item>
  );
};

export default TodoItem;
