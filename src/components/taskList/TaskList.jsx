import axios from "axios";
import { FiDelete } from "react-icons/fi";

const TaskList = ({ task }) => {

const deleteTask = async(id) => {
  const url = "https://63b1642df9a53fa20276f228.mockapi.io/tasks";
  try {
    await axios.delete(`${url}/${id}`)
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div>
      {task.map((item) => {
        const { id, task, date } = item;
        return (
          <div
            className="d-flex justify-content-between mt-2 bg-secondary rounded-3 p-3"
            key={id}
          >
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <div>
              <FiDelete 
              onClick={() => deleteTask(id)}
              style = {{
                cursor:"pointer",
                marginRight:"20px",
                fontSize:"2rem",
                boxShadow:"2px 2px 2px white"
              }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
