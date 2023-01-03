import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddTask = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {task, date}
    console.log(task)
    console.log(date)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control type="text" placeholder="Enter Task" onChange={(e) => setTask(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" onChange={(e) => setDate(e.target.value)}/>
        </Form.Group>

        <Button variant="primary w-50" type="submit">
          SAVE
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;
