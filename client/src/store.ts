// src/store.ts
import { createStore, combineReducers } from 'redux';
import authReducer from './reducer/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here if needed
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
