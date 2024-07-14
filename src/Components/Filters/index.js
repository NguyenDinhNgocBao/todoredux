import { Row, Col, Form, FormControl} from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchTodo} from '../../Redux/actions';

const Filters = () => {
  const dispatch = useDispatch();

  // search
  const [search, setSearch] = useState("");
  const handleOnChangeSearch = (e) => {
    setSearch(e.target.value);
    dispatch(searchTodo(e.target.value)); // Truyền giá trị của input vào action để dispatch đưa đến reducer xử lý
  };

  return (
    <Row className="justify-content-center">
      <Col xs={12}>
        <Form.Group className="mb-3 mt-3">
          <Form.Label style={{ fontWeight: 'bold' }}>Search</Form.Label>
          <FormControl
            type="text"
            placeholder="input search text"
            value={search}
            onChange={handleOnChangeSearch}
          />
        </Form.Group>
      </Col>
    </Row>
  );
};

export default Filters;
