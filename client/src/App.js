import React from 'react';
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  ListGroup,
  Card,
} from 'react-bootstrap';

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div>Todo List:</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Control placeholder='Add TODO' />
            <Button className='float-right' variant='primary'>
              Add
            </Button>{' '}
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <ListGroup variant='flush'>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
