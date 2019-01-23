import { LOGIN_SUCCESS } from './actions';

const defaultState = {
  isAuthenticated: false,
  user: null,
};

export default (state = defaultState, action) => {
  switch (action) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { user: action.user });
    default:
      return state;
  }
};
