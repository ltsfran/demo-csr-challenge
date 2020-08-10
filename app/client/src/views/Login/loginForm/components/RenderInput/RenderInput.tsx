import React from 'react';
import { Input } from '@app/client/src/common/components/Input';
import { Field } from '@app/client/src/common/components/Field';

export const RenderInput: React.FC<any> = ({
  label,
  type,
  meta: { error, touched },
  input
}) => {
  const isError = (error && touched) ? error : '';
  
  return(
    <Field label={label} portionWidth={1} errorMessage={isError}>
      <Input type={type} {...input} error={!!isError} />
    </Field>
  );
};

RenderInput.displayName = 'RenderInput';
