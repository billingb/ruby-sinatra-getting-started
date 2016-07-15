import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import FriendListApp from './containers/FriendListApp/FriendListApp';
import Authentication from './containers/Authentication/Authentication';
import NotFoundView from './views/NotFoundView';

export default (
  <Route path="/" component={App}>
    <Route path="/friends" component={FriendListApp} />

    <IndexRoute component={Authentication} />

    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
