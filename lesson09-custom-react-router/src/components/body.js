import React from 'react';
import { Row, Col } from 'reactstrap';
import List from './list';
import Input from './input';

const Body = () => (
  <Row>
    <Col xs={12}>
      <List />
    </Col>
    <Col xs={12} style={{ marginTop: 20 }}>
      <Input />
    </Col>
  </Row>
);

export default Body;
