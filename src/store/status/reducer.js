import { SET_LOADING } from "./actions";
import { LOGGING_IN } from "../authentication/actions";
import { SET_ERROR } from "./actions";

const defaultState = {
  isLoading: false,
  isLoggingIn: false,
  error: null
};

export default (state = defaultState, action) => {
  switch (action) {
    case SET_LOADING:
      return Object.assign({}, state, { isLoading: !state.isLoading });
    case LOGGING_IN:
      return Object.assign({}, state, { isLoggingIn: !state.isLoggingIn });
    case SET_ERROR:
      return Object.assign({}, state, { error: action.error });
    default:
      return state;
  }
};
