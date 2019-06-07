import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';
import ListItem from './list-item';

const List = ({ items }) => (
  <ListGroup>
    {items.map((item, index) => (
      <ListItem key={`list-item-${index}`} item={item} />
    ))}
  </ListGroup>
);

List.propTypes = {
  items: PropTypes.array
};

export default connect(state => ({
  items: state.items
}))(List);
