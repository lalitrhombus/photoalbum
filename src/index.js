import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { Router, Route,IndexRoute, Link, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import Users from './container/users';
import Photos from './container/photos';
import Albums from './container/albums';

require('../style/style.scss');

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render((
  <Provider store={createStoreWithMiddleware(reducers)}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Users} />
        <Route path="photos" component={Photos}>
          <Route path=":albumId" component={Photos}/>
        </Route>
        <Route path="albums" component={Albums}>
          <Route path=":userId" component={Albums}/>
        </Route>
      </Route>
    </Router>
  </Provider>), document.querySelector('.app'));




















