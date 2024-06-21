import { combineReducers } from 'redux';
import exampleReducer from './examplereducers';

const rootReducer = combineReducers({
  example: exampleReducer
});

export default rootReducer;