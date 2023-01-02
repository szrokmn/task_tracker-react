import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
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

  //CRUD  -READ-
  const getTask = async()=> {
    const { data } = await axios(url)
    setTask(data);
    console.log(data)
  }

  useEffect(() => {
    getTask()
  }, []);
  

  return (
    <div className="d-flex justify-content-center flex-column mt-4">
      <Button 
      onClick={(e) => {toggle()}}
      variant="danger"
      size="lg"
      >
        {text}
      </Button>

      { isOpen &&  <AddTask /> }
     
      <TaskList task ={task}/>
    </div>
  );
};

export default Home;
