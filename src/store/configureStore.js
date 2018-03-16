import { createStore } from 'redux';
import allReducers from '../reducers/index';

const configureStore = () => (
  createStore(allReducers)
);

export default configureStore;
