import { Row, Col, Form, Button, InputGroup} from 'react-bootstrap';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../Redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { searchListSelector, todoListSelector } from '../../Redux/selector';

const TodoList = () => {
  const dispatch = useDispatch();//Khởi tạo dispatch để gửi action đến reducer
  const [todoName, setTodoName] = useState("");

  const todoList = useSelector(todoListSelector); //Lấy list todo ở reducer để hiển thị ra UI

  const handelAddButtonClick = () => {
    // gán dữ liệu của action cho dispatch
    dispatch(addTodo({
      id: uuidv4(), //Khởi tạo 1 id ngẫu nhiên
      name: todoName,// Nhận giá trị của state todoName
    }));
    setTodoName("");
  };

  const handleOnChangeName = (e) => {
    setTodoName(e.target.value);//Gán dữ liệu nhập vào cho state 
  };

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) => (
          <Todo key={todo.id} id={todo.id} name={todo.name} />
        ))}
      </Col>
      <Col>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Add a new todo"
            value={todoName}
            onChange={handleOnChangeName}
          />
          <Button variant="primary" onClick={handelAddButtonClick}>
            Add
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default TodoList;
