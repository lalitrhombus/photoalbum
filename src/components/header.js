import React from 'react';

export default class header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
      <div className="logo">
        <img src="http://goodbox.in/images/logo-dark@2x.png" alt=""/>
      </div>
      <div className="nav">
        <a className="active" to="/">
          <svg>
            <use xlinkHref={`/public/iconSprite.svg#icon-user`}></use>
          </svg>
          <p>Users</p>
        </a>
        <a className="" to="/albums">
          <svg>
            <use xlinkHref={`/public/iconSprite.svg#icon-album`}></use>
          </svg>
          <p>Albums</p>
        </a>
        <a className="" to="/photos">
          <svg>
            <use xlinkHref={`/public/iconSprite.svg#icon-picture`}></use>
          </svg>
          <p>Pictures</p>
        </a>
      </div>
    </header>
    );
  }
}
