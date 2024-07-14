import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import TodoList from './Components/TodoList';
import Filters from './Components/Filters';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container
      style={{
        maxWidth: '500px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: '5px',
        height: '90vh',
      }}
    >
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>TODO APP with REDUX</h1>
        </Col>
      </Row>
      <Filters />
      <hr />
      <TodoList />
    </Container>
  );
}

export default App;
