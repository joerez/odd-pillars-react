import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import App from './components/App';
import BlogHome from './components/BlogHome';
import BlogPost from './components/BlogPost';
import BlogArea from './components/BlogArea';

const Routes = (props) => (
  <Router {...props}>
    <Route exact path="/" component={App}>
      <IndexRoute component={BlogHome} />
      <Route path="/p/:page" component={BlogHome} />
      <Route path="/post/:slug" component={BlogPost} />
      <Route exact path="/blog" component={BlogArea} />
    </Route>
  </Router>
);

export default Routes;
