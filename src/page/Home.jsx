import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const url = "https://63b1642df9a53fa20276f228.mockapi.io/tasks";

  const toggle = (e) => {
    setIsOpen(!isOpen)
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar"
    setText(buttonText)
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
