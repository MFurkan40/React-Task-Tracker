import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [isShow, setIsShow] = useState(false);
  const [task, setTask] = useState([]);
  const url = "https://63976bd277359127a037131b.mockapi.io/api/tasks";

  //! CRUD GET --READ

  const getTask = async () => {
    try {
      const { data } = await axios(url);
      setTask(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  const buttonText = isShow ? "Hide Task Bar" : "Show Task Bar";

  return (
    <div className=" mt-4 d-flex justify-content-center flex-column">
      <Button
        variant="danger"
        size="lg"
        onClick={(e) => {
          setIsShow(!isShow);
        }}
      >
        {buttonText}
      </Button>

      {isShow && <AddTask getTask={getTask} />}

      <TaskList task={task} getTask={getTask} />
    </div>
  );
};

export default Home;
