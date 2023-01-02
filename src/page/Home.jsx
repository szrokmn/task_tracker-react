import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");

  const toggle = (e) => {
    setIsOpen(!isOpen)
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar"
    setText(buttonText)
  }  

  return (
    <div>
      <Button 
      onClick={(e) => {toggle()}}
      variant="danger">{text}</Button>

      { isOpen &&  <AddTask /> }
     
      <TaskList />
    </div>
  );
};

export default Home;
