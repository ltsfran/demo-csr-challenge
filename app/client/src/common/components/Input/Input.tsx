import React from 'react';
import PropTypes from 'prop-types';
import {
  InputWrapper,
  InputText
} from './styled';

interface Props {
  className?: string;
  type?: string;
  name: string;
  placeholder?: string;
  maxLength?: string;
  value?: string;
  width?: string;
  fullwidth?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  onChange?: Function;
  error?: boolean;
}

export const Input: React.FC<Props> = ({
  className,
  type,
  name,
  placeholder,
  value,
  width,
  maxLength,
  fullwidth,
  disabled,
  backgroundColor,
  onChange,
  error
}) => {
  const handleChange = (e) => {
    const ele = e.target;
    ele.value = maxLength ? ele.value.slice(0, parseInt(maxLength)) : ele.value;
    const isTypeNumber: boolean = type === 'number';

    if(isTypeNumber) {
      ele.value = formatValueChangeState(ele.value);
    }
    if(onChange) {
      onChange(e);
    }
  };

  const formatValueChangeState = (val) => {
    return val.replace(/[^0-9]/g, '');
  };

  return (
    <InputWrapper>
      <InputText
        className={className}
        type={type === "number" ? "text" : type}
        name={name}
        placeholder={placeholder}
        value={value}
        width={width}
        maxLength={maxLength}
        disabled={disabled}
        backgroundColor={backgroundColor}
        onChange={handleChange}
        data-error={error}
        fullwidth={fullwidth}
      />
    </InputWrapper>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.string,
  onChange: PropTypes.func,
  width: PropTypes.string,
  fullwidth: PropTypes.bool,
  disabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  error: PropTypes.bool
};

Input.defaultProps = {
  type: 'text',
  width: '200px',
  disabled: false,
  backgroundColor: '#FFFFFF'
};

Input.displayName = 'Input';
