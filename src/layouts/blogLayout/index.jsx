/* eslint-disable no-trailing-spaces */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import routeList from '../../routes/routeList';
import $ from '../../styles/global';
import Util from '../../utils';

const Container = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
`;

const NavigationHeader = styled.div`
	height: 5%;
	width: 100%;
	position: sticky;
	font-size: ${$.font.size.subtitle}px;
	margin-left: ${$.layout().margin4}px;
	font-weight: ${$.font.weight.black}px;
	color: ${$.color.blue2};
	display: block;
`;

const ContentContainer = styled.div`
	margin-top: 5%;
	width: 100%;
	height: 90%;
	margin-bottom: 5%;
`;

const Footer = styled.div`
	height: 5%;
	width: 100%;
	text-align: center;
	font-size: ${$.font.size.header}px;
	font-weight: ${$.font.weight.bold};
	color: ${$.color.blue1};
`;

const blogEntriesWithKeys = Util.addArrayKeys(Object.entries(routeList.blog));

const BlogLayout = ({ children }) => (
  <Container>
    <NavigationHeader>
			Hello from blog layout
      {blogEntriesWithKeys.map(([name, route, key]) => (
        <>
          <br />
          <Link to={route} key={key}>
            {`Link to ${name} blog entry`}
          </Link>
        </>
      ))}
      <Link to={routeList.landing}>Go back home</Link>
    </NavigationHeader>
    <ContentContainer>{children}</ContentContainer>
    <Footer>Hello from footer</Footer>
  </Container>
);

BlogLayout.defaultProps = {
  children: <></>,
};

BlogLayout.propTypes = {
  children: PropTypes.node,
};

export default BlogLayout;
