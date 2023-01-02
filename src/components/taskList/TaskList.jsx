import { FiDelete } from "react-icons/fi";

const TaskList = ({ task }) => {
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
