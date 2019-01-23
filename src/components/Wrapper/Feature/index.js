import React from 'react';

export default function Feature(props) {
  return (
    <div className="feature__wrapper">
      <div className="feature__wrapper__content">
        <div className="feature__wrapper__icon">{props.icon}</div>
        <div>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}
