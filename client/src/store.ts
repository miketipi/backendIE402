// src/store.ts
import { createStore, combineReducers } from 'redux';
import authReducer from './reducer/authReducer';
import userReducer from './reducer/userReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
