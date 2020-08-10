import React  from 'react';
import { useSelector } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import {
  Wrapper,
  Content,
  FormStyled
} from './styled';
import { Cover } from './../Cover';
import { fetchUser } from '@app/client/src/views/Login/loginForm/state/user/actions';
import { required, email } from '@app/client/src/utils/validations';
import { RenderInput } from './../RenderInput';
import { Button } from '@app/client/src/common/components/Button';
import { RootState } from '@app/client/src/config/store';

const Form: React.FC<any> = ({ handleSubmit }) => {
  const isFetching = useSelector((state: RootState) => state.user.isFetching);

  return(
    <Wrapper>
      <Cover />
      <Content>
        <FormStyled onSubmit={handleSubmit}>
          <Field
            name="user"
            type="text"
            label="Usuario"
            component={RenderInput}
            validate={[required, email]} />
          <Field
            name="password"
            type="password"
            label="Contraseña"
            component={RenderInput}
            validate={[required]} />
          <Button
            type="submit" 
            fullWidth 
            loading={isFetching}>
            Ingresar
          </Button>
        </FormStyled>
      </Content>
    </Wrapper>);
};

Form.displayName = 'Form';

export const FormContainer = reduxForm({
  form: 'loginForm',
  onSubmit(fields, dispatch, { history }) {
    dispatch(fetchUser(fields, history));
  }
})(Form);