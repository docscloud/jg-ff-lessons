import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListGroupItem, Button, Row, Col } from 'reactstrap';
import { removeTask, checkTask } from '../lib/tasks/actions';

const ListItem = ({ item, dispatch }) => {
  const onRemoveItem = () => dispatch(removeTask(item));

  const onCheckItem = () => dispatch(checkTask(item));

  return (
    <ListGroupItem
      style={{
        textDecoration: item.done ? 'line-through' : '',
        cursor: 'pointer'
      }}
    >
      <Row>
        <Col xs={10}>
          <span onClick={onCheckItem}>{item.name}</span>{' '}
        </Col>
        <Col xs={2}>
          <Button onClick={onRemoveItem} color="link">
            X
          </Button>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

ListItem.propTypes = {
  item: PropsTypes.object,
  dispatch: PropsTypes.func
};

export default connect()(ListItem);
