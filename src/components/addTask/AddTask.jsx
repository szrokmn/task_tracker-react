import { Button, Form } from "react-bootstrap";

const AddTask = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="Password" />
        </Form.Group>        
        <Button variant="primary" type="submit">
          SAVE
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;
