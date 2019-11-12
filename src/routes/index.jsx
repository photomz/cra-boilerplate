import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Transition from './Transition';
import NormalLayout from '../layouts/normalLayout';
import BlogLayout from '../layouts/blogLayout';

import routeAndPageList from './routeAndPageList';

const Routes = () => (
  <Router>
    <Transition>
      {routeAndPageList.map(({
        route, component, key, layout, ...props
      }) => (
        <Route
          path={route}
          render={() => {
            switch (layout) {
              case 'blog': return <BlogLayout>{component}</BlogLayout>;
              default: return <NormalLayout>{component}</NormalLayout>;
            }
          }}
          key={key}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
      ))}
    </Transition>
  </Router>
);

export default Routes;
