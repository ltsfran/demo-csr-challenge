import React from 'react';
import PropTypes from 'prop-types';
import { FieldStyled, Label, BoxMessage } from './styled';

interface Props {
  label?: string;
  portionWidth?: number;
  children: React.ReactNode;
  errorMessage?: string;
}

export const Field: React.FC<Props> = ({
  label,
  portionWidth,
  children,
  errorMessage,
}) => {

  return (
    <FieldStyled portionWidth={portionWidth}>
      <Label>{label}</Label>
      {children}
      <BoxMessage errorMessage={errorMessage}>
        { errorMessage }
      </BoxMessage>
    </FieldStyled>
  );
};

Field.propTypes = {
  label: PropTypes.string,
  portionWidth: PropTypes.number,
  children: PropTypes.node.isRequired,
  errorMessage: PropTypes.string,
};

Field.displayName = 'Field';
