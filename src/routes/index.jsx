import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Transition from './Transition';
import NormalLayout from '../layouts/normalLayout';
import BlogLayout from '../layouts/blogLayout';

import routeList from './routeList';
import routeAndPageList from './routeAndPageList';

const Routes = () => (
  <Router>
    <Transition>
      {routeAndPageList.map(({
        path, component, key, layout,
      }) => (
        <Route
          path={path}
          render={() => {
            switch (layout) {
              case 'blog':
                return <BlogLayout>{component}</BlogLayout>;
              default:
                return <NormalLayout>{component}</NormalLayout>;
            }
          }}
          key={key}
        />
      ))}
    </Transition>
  </Router>
);

export default Routes;
export { routeList };
