import styled, { css } from 'styled-components';

interface Props {
  errorMessage?: string;
  portionWidth?: number;
}

export const FieldStyled = styled.div`
  font-family: 'Roboto';
  width: ${props => `${props.portionWidth * 100}%`};
  flex: 1 1 100%;

  input {
    width: 100%;
  }

  margin-bottom: 14px;

  @media(min-width: 480px) {
    ${(props: Props) => props.portionWidth && `
      flex: 1 1 calc(${props.portionWidth * 100}% - 20px);
    `}
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 2px;
  min-height: 19px;
  color: black;
  font-size: 16px;

  @media(min-width: 480px) {
    text-size-adjust: 100%;
  }
`;

export const BoxMessage = styled.span`
  display: block;
  font-size: 14px;
  line-height: 15px;
  margin-top: 4px;
  height: 15px;

  ${(props: Props) => props.errorMessage && css`
    color: #F14747;
  `}
`;

FieldStyled.displayName = 'FieldStyled';
Label.displayName = 'Label';
BoxMessage.displayName = 'BoxMessage';
