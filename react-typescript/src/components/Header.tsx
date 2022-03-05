import React from 'react';
import { SiTypescript, SiReact } from 'react-icons/si';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 30px;
  color: #5ed2f3;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Icons>
        <SiReact style={{ marginRight: '10px' }} color="#5ED2F3" />
        <SiTypescript color="2F73BF" />
      </Icons>
      <Title>Todo App</Title>
    </Wrapper>
  );
};

export default Header;
