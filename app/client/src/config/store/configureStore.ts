import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import { userReducer, userState } from '@app/client/src/views/Login/loginForm';

export interface RootState {
  user?: userState;
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      form: reduxFormReducer,
      user: userReducer
    }),
    (window as any).__PRELOADED_STATE__,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
