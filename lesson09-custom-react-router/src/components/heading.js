import React from 'react';
import { connect } from 'react-redux';
import { Button, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { logOut } from '../lib/user/actions';
import Link from './router/link';

const Heading = ({ logOut }) => (
  <Navbar color="light" light>
    <NavbarBrand href="/">Todo List</NavbarBrand>
    <Nav>
      <NavItem>
        <NavLink>
          <Link to="about">About</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <Button onClick={logOut} color="light">
          Logout
        </Button>
      </NavItem>
    </Nav>
  </Navbar>
);

export default connect(
  null,
  { logOut }
)(Heading);
