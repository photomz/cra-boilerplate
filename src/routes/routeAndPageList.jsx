import React from 'react';

import Util from '../utils';
import routeList from './routeList';

import Landing from '../pages/landing';
import Page2 from '../pages/page2';
import Settings from '../pages/settings';

import SamIAm from '../pages/blog/sam-I-am';
import GreenEggsAndHam from '../pages/blog/green-eggs-and-ham';

// eslint-disable-next-line object-curly-newline
const { landing, page2, settings, blog } = routeList;

const routeAndComponentList = Util.addKeys([
  { route: landing, component: <Landing /> },
  { route: page2, component: <Page2 /> },
  { route: settings, component: <Settings /> },
  { route: blog.samIAm, component: <SamIAm />, layout: 'blog' },
  { route: blog.GreenEggsAndHam, component: <GreenEggsAndHam />, layout: 'blog' },
]);

export default routeAndComponentList;
