import { LOGIN_SUCCESS } from "../authentication/actions";

const defaultState = { links: [{ text: "Home" }, { text: "Register" }] };
const authenticatedLinks = [{ text: "Home" }, { text: "Logout" }];

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { links: authenticatedLinks });
    default:
      return state;
  }
};
