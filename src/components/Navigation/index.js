import React from "react";
import { connect } from "react-redux";

import Logo from "./Logo";
import Links from "./Links";

import "./style.scss";

function Navigation(props) {
  return (
    <div className="pr-topnav">
      <Logo />
      <Links links={props.links} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    links: state.nav.links
  };
};

export default connect(mapStateToProps)(Navigation);
