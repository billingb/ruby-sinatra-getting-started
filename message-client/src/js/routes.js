import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import FriendListApp from './containers/FriendListApp/FriendListApp';
import MessagesApp from './containers/MessagesApp/MessagesApp';
import Authentication from './containers/Authentication/Authentication';
import { requireAuthentication } from './components/Authenticated/Authenticated';
import NotFoundView from './views/NotFoundView';

export default (
  <Route path="/" component={App}>
    <Route path="/friends" component={requireAuthentication(FriendListApp)} />

    <Route path="login" component={Authentication} />
    <IndexRoute component={requireAuthentication(MessagesApp)} />
    <route path="/mesg" component={requireAuthentication(MessagesApp)} />

    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
