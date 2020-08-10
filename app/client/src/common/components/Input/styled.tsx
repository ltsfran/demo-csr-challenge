import styled, { css } from 'styled-components';

interface Props {
  disabled?: boolean;
  width?: string;
  backgroundColor?: string;
  'data-error'?: boolean;
  fullwidth?: boolean;
}

export const InputWrapper = styled.div`
  display: inline;
  position: relative;
  z-index: 0;
`;

export const InputText = styled.input`
  background-color: ${(props: Props) => props.backgroundColor 
    ? `${props.backgroundColor}` 
    : 'white'};
  width: ${(props: Props) => props.fullwidth ? '100%': props.width};
  height: 40px;
  border: 2px solid #869BA7;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  font-family: 'Roboto';

  ${(props: Props) => props.disabled && css`
    pointer-events: none;
    user-select: none;
    opacity: 0.3;
  `};

  ${(props: Props) => props['data-error'] && css`
    border: 2px solid #F14747;
  `};
  
  &::placeholder{
    font-family: 'Roboto'
  }
  &:focus{
    outline: none;
    border: 2px solid #4389F3;
  }
`;