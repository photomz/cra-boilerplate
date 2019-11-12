import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import routeList from '../../routes/routeList';
import $ from '../../styles/global';

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
`;

const ContentContainer = styled.div`
	margin-top: 5%;
	width: 100%;
	height: 90%;
	margin-bottom: 5%;
`;

const NormalLayout = ({ children }) => (
  <Container>
    <NavigationHeader>
			Hello from normal layout
      <Link to={routeList.landing}>Go back home</Link>
    </NavigationHeader>
    <ContentContainer>{children}</ContentContainer>

  </Container>
);

NormalLayout.defaultProps = {
  children: <></>,
};

NormalLayout.propTypes = {
  children: PropTypes.node,
};

export default NormalLayout;
