import { INCREMENT_IF_ODD, INCREMENT } from '../action/Action';

const initialState = {
  value: 0
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_IF_ODD:
      return state.value % 2 !== 0 ? { ...state, value: state.value + 1 } : state;
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    default:
      return state;
  }
};

export default exampleReducer;