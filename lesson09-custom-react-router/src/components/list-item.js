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
        cursor: 'pointer'
      }}
    >
      <Row>
        <Col
          xs={11}
          style={{ textDecoration: item.done ? 'line-through' : '' }}
          onClick={onCheckItem}
        >
          <span>{item.name}</span>
        </Col>
        <Col xs={1} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onRemoveItem} color="danger">
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
