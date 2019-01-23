import { LOGIN_SUCCESS } from '../authentication/actions';

const defaultState = {
  links: [{ text: 'Home', path: '/' }, { text: 'How & Why', path: '/' }],
};
const authenticatedLinks = [{ text: 'Home', path: '/' }, { text: 'Logout', path: '/logout' }];

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { links: authenticatedLinks });
    default:
      return state;
  }
};
