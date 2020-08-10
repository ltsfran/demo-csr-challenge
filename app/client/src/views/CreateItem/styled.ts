import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 100px);
  padding: 20px;
  font-size: 18px;
`;

Wrapper.displayName = 'Wrapper';
Content.displayName = 'Content';