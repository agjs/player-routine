import React from 'react';
import { connect } from 'react-redux';

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick = () => {};

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="pr-auth">
        <input type="email" required />
        <input type="password" required />
        <button>Login</button>
        <p>
          Don't have an account? <span onClick={this.handleClick}>Join now!</span>
        </p>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.status,
  };
};

export default connect(mapStateToProps)(Auth);
