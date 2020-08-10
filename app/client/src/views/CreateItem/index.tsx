import React from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper, Content } from './styled';
import { Redirect } from 'react-router-dom';
import { useAuthorization } from '@app/client/src/utils/validations';
import { Sidebar } from '@app/client/src/common/components/Sidebar';

export const CreateItem: React.FC = () => {
  const isAuth: boolean = useAuthorization();
  const name: string = sessionStorage.getItem('name');
  const history = useHistory();

  const items = [
    {
      onClick: () => {
        history.push('/createitem');
      }
    },
    {
      onClick: () => {
        sessionStorage.clear();
        history.push('/');
      }
    }
  ];

  if(isAuth) {
    return (
      <Wrapper>
        <Sidebar items={items}/>
        <Content>Bienvenido {name}</Content>
      </Wrapper>
    );
  }

  return <Redirect to="/" />;
};

CreateItem.displayName = 'CreateItem';