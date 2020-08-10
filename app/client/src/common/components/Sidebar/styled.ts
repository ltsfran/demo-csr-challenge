import styled from 'styled-components';

export const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  background-color: #1B264D;
  height: 100%;
  padding: 30px 20px;
`;

export const Logo = styled.div`
  background-color: #C4C4C4;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 15px 0;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 10px;
`;

export const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #566599;
  cursor: pointer;
`;

SidebarStyled.displayName = 'SidebarStyled';
Logo.displayName = 'Logo';
Content.displayName = 'Content';
ItemWrapper.displayName = 'ItemWrapper';
Item.displayName = 'Item';