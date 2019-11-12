import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const Footer = styled.div`
	height: 5%;
	width: 100%;
	text-align: center;
	font-size: ${$.font.size.header}px;
	font-weight: ${$.font.weight.bold};
	color: ${$.color.blue1};
`;

const BlogLayout = ({ children }) => (
  <Container>
    <NavigationHeader>Hello from blog layout</NavigationHeader>
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
