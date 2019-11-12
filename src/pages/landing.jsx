import React from 'react';
import { Link } from 'react-router-dom';
import routeList from '../routes/routeList';

const Landing = () => (
  <div>
		Hello from landing page
    <Link to={routeList.page2}>Click to page 2</Link>
    <Link to={routeList.settings}>Click to settings page</Link>
    <Link to={routeList.blog.greenEggsAndHam}>Click to greenEggsAndHam blog post</Link>
    <Link to={routeList.blog.samIAm}>Click to samIAm blog post</Link>
  </div>
);

export default Landing;
