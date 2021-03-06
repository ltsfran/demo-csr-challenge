import styled from 'styled-components';

export const Wrapper = styled.div`  
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background: linear-gradient(180deg, #1B264D 0%, rgba(27, 38, 77, 0.85) 24.48%, rgba(27, 38, 77, 0.76) 45.83%, rgba(27, 38, 77, 0.72) 71.35%, rgba(27, 38, 77, 0.7) 100%);

  @media(min-width: 769px) {
    background: white;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 5px;
  padding: 25px;
  max-width: 300px;
`;

Wrapper.displayName = 'Wrapper';
Content.displayName = 'Content';
FormStyled.displayName = 'FormStyled';