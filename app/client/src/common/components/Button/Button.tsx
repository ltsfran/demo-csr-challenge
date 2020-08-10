import React from 'react';
import PropTypes from 'prop-types';
import { 
  Wrapper, 
  Loading
} from './styled';

interface Props {
  type?: string;
  children?: React.ReactNode;
  width?: string;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: Function;
}

export const Button: React.FC<Props> = ({
  children,
  loading,
  ...nextProps
}) => {
  if(loading) {
    return(
      <Wrapper loading={loading} {...nextProps}>
        <Loading {...nextProps} />
      </Wrapper>
    );
  }

  return(
    <Wrapper {...nextProps}>
      {children}
    </Wrapper>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.string,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.displayName = 'Button';

