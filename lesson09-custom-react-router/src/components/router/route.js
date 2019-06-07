import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { register, unregister } from '../../lib/router';

class Route extends Component {
  componentWillMount() {
    addEventListener('popstate', this.handlePop);
    register(this);
  }

  componentWillUnmount() {
    unregister(this);
    removeEventListener('popstate', this.handlePop);
  }

  handlePop = () => {
    this.forceUpdate();
  };

  render() {
    const { path, component } = this.props;

    const match = new RegExp(`^${path}`).exec(location.pathname);

    if (!match) return null;

    if (component) return React.createElement(component);

    return null;
  }
}

Route.propTypes = {
  path: PropTypes.string,
  component: PropTypes.func
};

export default Route;
