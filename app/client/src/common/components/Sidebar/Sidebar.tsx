import React from 'react';
import { useHistory } from "react-router-dom";
import { 
  SidebarStyled,
  Logo,
  Content,
  ItemWrapper,
  Item
} from './styled';

interface Props {
  items?: any;
}

export const Sidebar: React.FC<Props> = ({ items }) => (
  <SidebarStyled>
    <Logo />
    <Content>
      {items && items.map((item, index) => (
        <ItemWrapper key={index}>
          <Item onClick={item.onClick}/>
        </ItemWrapper>
      ))}
    </Content>
  </SidebarStyled>
);

Sidebar.displayName = 'Sidebar';