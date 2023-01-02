import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState();
  const url = "https://63b1642df9a53fa20276f228.mockapi.io/tasks";

  const toggle = (e) => {
    setIsOpen(!isOpen)
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar"
    setText(buttonText)
  }  

  const getTask = async()=> {
    const { data } = await axios(url)
    setTask(data);
  }

  return (
    <div>
      <Button 
      onClick={(e) => {toggle()}}
      variant="danger"
      size="lg"
      >
        {text}
      </Button>

      { isOpen &&  <AddTask /> }
     
      <TaskList />
    </div>
  );
};

export default Home;
