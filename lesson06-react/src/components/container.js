import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Container extends Component {
  constructor() {
    super();
    this.state = { open: true };
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <>
        <button style={{ marginBottom: '20px' }} onClick={this.toggle}>
          Collapse list
        </button>
        <div
          style={{
            display: this.state.open ? 'block' : 'none'
          }}
        >
          {this.props.children}
        </div>
        <br />
      </>
    );
  }
}

Container.propTypes = {
  children: PropTypes.any
};

export default Container;
