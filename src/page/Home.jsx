import AddTask from "../components/addTask/AddTask"
import TaskList from "../components/taskList/TaskList"
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const Home = () => {

const [isOpen, setIsOpen] = useState(false);
const [text, setText] = useState("Show Task Bar");

  return (
    <div>
        <Button variant="danger">Show Task Bar</Button>
        <AddTask/>
        <TaskList/>
    </div>
  )
}

export default Home