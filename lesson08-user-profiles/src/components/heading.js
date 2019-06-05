import React from 'react';
import { connect } from 'react-redux';
import { Button, Navbar, NavbarBrand } from 'reactstrap';
import { logOut } from '../lib/user/actions';

const Heading = ({ onClick, logOut, dispatch }) => (
  <Navbar color="light" light>
    <NavbarBrand href="/">Todo List</NavbarBrand>
    <Button onClick={logOut} color="danger">
      Logout
    </Button>
  </Navbar>
);

export default connect(
  null,
  { logOut }
)(Heading);
