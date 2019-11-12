import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch } from 'react-router-dom';
import './Transition.css';

const Transition = ({ children }) => (
  <Route
    render={({ location }) => (
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={800}>
          <Switch location={location}>{children}</Switch>
        </CSSTransition>
      </TransitionGroup>
    )}
  />
);

Transition.defaultProps = {
  children: <></>,
};

Transition.propTypes = {
  children: PropTypes.node,
};

export default Transition;
