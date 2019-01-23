import { Button } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export function Navigation(props) {
  const nav = props.links.map((link, index) => {
    return (
      <li key={index}>
        <Button component={Link} to={link.path}>
          {link.text}
        </Button>
      </li>
    );
  });
  return <ul className="pr-topnav__links">{nav}</ul>;
}

const mapStateToProps = state => {
  return {
    links: state.nav.links,
  };
};

export default connect(mapStateToProps)(Navigation);
