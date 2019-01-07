import React from "react";

export default function Navigation(props) {
  const links = props.links || [];
  const nav = links.map((link, index) => {
    return <li key={index}>{link.text}</li>;
  });

  return <ul className="pr-topnav__links">{nav}</ul>;
}
