import React from 'react';
import { Component } from 'react';
import Header from './header';
import Users from '../container/users';
import Photos from '../container/photos';
import Albums from '../container/albums';



export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Users />
        <Photos />
        <Albums />
      </div>
    );
  }
}
