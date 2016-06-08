import React from 'react';
import { Link } from 'react-router';

export default class header extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    let active = {}

    return (
      <header>
      <div className="logo">
        <img src="http://goodbox.in/images/logo-dark@2x.png" alt=""/>
      </div>
      <div className="nav">
        <Link to="/" className="" onlyActiveOnIndex activeClassName="active">
          <svg>
            <use xlinkHref={`/public/iconSprite.svg#icon-user`}></use>
          </svg>
          <p>Users</p>
        </Link>
        <Link className="" activeClassName="active" to="/albums">
          <svg>
            <use xlinkHref={`/public/iconSprite.svg#icon-album`}></use>
          </svg>
          <p>Albums</p>
        </Link>
        <Link className="" activeClassName="active" to="/photos">
          <svg>
            <use xlinkHref={`/public/iconSprite.svg#icon-picture`}></use>
          </svg>
          <p>Pictures</p>
        </Link>
      </div>
    </header>
    );
  }
}
