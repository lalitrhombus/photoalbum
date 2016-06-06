import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="http://goodbox.in/images/logo-dark@2x.png" alt=""/>
      </div>
      <div className="nav">
        <Link className="active" to="/">
          <svg>
            <use xlinkHref={`/iconSprite.svg#icon-user`}></use>
          </svg>
          <p>Users</p>
        </Link>
        <Link className="" to="/albums">
          <svg>
            <use xlinkHref={`/iconSprite.svg#icon-album`}></use>
          </svg>
          <p>Albums</p>
        </Link>
        <Link className="" to="/photos">
          <svg>
            <use xlinkHref={`/iconSprite.svg#icon-picture`}></use>
          </svg>
          <p>Pictures</p>
        </Link>
      </div>
    </header>
  );
}

export default withStyles(s)(Header);