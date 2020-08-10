import React from 'react';
import {
  Wrapper,
  Content,
  FormStyled
} from './styled';
import { Cover } from './../Cover';

export const Form: React.FC = () => {

  return(
    <Wrapper>
      <Cover />
      <Content>
        <FormStyled />
      </Content>
    </Wrapper>);
};

Form.displayName = 'Form';