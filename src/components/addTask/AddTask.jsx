import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTask = ({ getTask }) => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task: value, date };
    addNewTask(newTask);
    setValue("");
    setDate("");
  };

  //! CRUD- POST --CREATE
  const addNewTask = async (newTask) => {
    const url = "https://63976bd277359127a037131b.mockapi.io/api/tasks";

    try {
      await axios.post(url, newTask);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group className="mb-3 py-1" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Task"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 py-1" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </Form.Group>
        <div className="text-center py-1">
          <Button variant="success btn-lg w-75" type="submit">
            SAVE
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
