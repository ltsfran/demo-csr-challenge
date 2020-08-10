import styled from 'styled-components';

export const Cover = styled.div`
  display: none;
  background: linear-gradient(180deg, #1B264D 0%, rgba(27, 38, 77, 0.85) 24.48%, rgba(27, 38, 77, 0.76) 45.83%, rgba(27, 38, 77, 0.72) 71.35%, rgba(27, 38, 77, 0.7) 100%);
  max-width: 640px;
  height: 100%;

  @media(min-width: 769px) {
    display: flex;
    flex-wrap: wrap;
    width: 60%
  }

  @media(min-width: 1024px) {
    width: 80%;
  }
`;

Cover.displayName = 'Cover';