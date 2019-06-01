import React, { Component } from 'react';
import PropTypes from 'prop-types';

// prop passed to component example
<Container someProp="fdjksd" />;

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  toggle = () => {
    // value from state
    const inputValue = this.props.inputValue;
    // value from component props
    const someProp = this.props.someProp;
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

export default connect(state => ({ inputValue: state.inputValue }))(Container);
