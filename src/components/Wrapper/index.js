import React from "react";
import { connect } from "react-redux";

import { setError } from "../../store/status/actions";

class Wrapper extends React.Component {
  componentDidCatch(error, errorInfo) {
    this.props.dispatch(setError(error));
  }
  render() {
    return (
      <div>
        <h1>Wrapper</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.status
  };
};

export default connect(mapStateToProps)(Wrapper);
