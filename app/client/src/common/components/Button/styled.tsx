import styled, { keyframes, css } from 'styled-components';

interface Props {
  width?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  primary?: boolean;
}

const animationLoading = keyframes`
  to {transform: rotate(360deg);}
`;

export const Loading = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid white;
  border-top: 2px solid #1B264D;
  animation: ${animationLoading} .6s linear infinite;
`;

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: Props) => props.fullWidth ? '100%' : props.width};
  background-color: #1B264D;;
  min-height: 40px;
  padding: 15px 25px;
  border: none;
  border: 1px solid #1B264D;;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-family: 'Roboto';
  cursor: pointer;

  &:hover {
    background-color: #31458A;;
  }

  ${(props: Props) => props.disabled && css`
    pointer-events: none;
    user-select: none;
    opacity: 0.3;
  `};

  ${(props: Props) => props.loading && css`
    pointer-events: none;
    user-select: none;
  `};
`;

Loading.displayName = 'Loading';
Wrapper.displayName = 'Wrapper';