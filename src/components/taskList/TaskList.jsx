import { RiDeleteBack2Fill } from "react-icons/ri";
import { BiCalendarEdit } from "react-icons/bi";
import axios from "axios";
import { useState } from "react";
import EditTask from "../editTask/EditTask";

const TaskList = ({ task, getTask }) => {
  const [editTask, setEditTask] = useState("");

  //! CRUD DELETE --DELETE
  const deleteTask = async (id) => {
    const url = `https://63976bd277359127a037131b.mockapi.io/api/tasks`;

    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };

  return (
    <>
      <div>
        {task.map((item) => {
          const { id, task, date } = item;
          return (
            <div
              key={id}
              className="mt-2 d-flex justify-content-between rounded-2 p-2 px-3"
              style={{
                backgroundColor: "dimgray",
                color: "#FDE7E1",
              }}
            >
              <div>
                <h4 className="pb-3">{task}</h4>
                <p>{date}</p>
              </div>
              <div className="d-flex flex-column">
                <RiDeleteBack2Fill
                  style={{
                    cursor: "pointer",
                    marginRight: "18px",
                    marginBottom: "10px",
                    fontSize: "2.3rem",
                  }}
                  onClick={() => deleteTask(id)}
                />

                <BiCalendarEdit
                  style={{
                    cursor: "pointer",
                    marginRight: "18px",
                    fontSize: "2.3rem",
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#edit-modal"
                  onClick={() => setEditTask(item)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <EditTask editTask={editTask} getTask={getTask} />
    </>
  );
};

export default TaskList;
