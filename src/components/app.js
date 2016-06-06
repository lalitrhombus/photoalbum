import React from 'react';
import { Component } from 'react';
import Header from './header';
import Users from '../container/users';



export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Users />
      </div>
    );
  }
}
