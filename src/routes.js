import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {isLoaded as isAuthLoaded, load as loadAuth} from 'redux/modules/auth';
import {
  App,
  Chat,
  Home,
  Widgets,
  About,
  Login,
  LoginSuccess,
  Survey,
  NotFound,
} from 'containers';

export default (store) => {

  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="*" component={NotFound} status={404}/>
    </Route>
  );
};
