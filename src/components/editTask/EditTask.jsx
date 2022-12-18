import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditTask = ({ editTask, getTask }) => {
  const { id, task: newTask, date: newDate } = editTask;

  const [task, setTask] = useState(newTask);
  const [date, setDate] = useState(newDate);

  useEffect(() => {
    setTask(newTask);
    setDate(newDate);
  }, [newTask, newDate]);

  //!CRUD - Update (PUT:Whole Update,PATCH :Partially Update)
  const editTaskValue = async (id, task) => {
    const url = `https://63976bd277359127a037131b.mockapi.io/api/tasks`;
    try {
      await axios.put(`${url}/${id}`, task);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTaskValue(id, { task, date });
    setTask("");
    setDate("");
  };

  return (
    <div className="modal fade" id="edit-modal" tabIndex={-1}>
      <Modal.Dialog>
        <Modal.Header className="bg-secondary">
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>

        <Modal.Body className="bg-danger">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="task" className="form-label">
                Task
              </label>
              <input
                type="text"
                className="form-control"
                id="task"
                placeholder="Enter your task"
                value={task || ""}
                onChange={(e) => setTask(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                placeholder="Enter your Date"
                value={date || ""}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer className="bg-secondary">
          <Button variant="warning" data-bs-dismiss="modal">
            Close
          </Button>
          <Button
            variant="primary"
            data-bs-dismiss="modal"
            onClick={handleSubmit}
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default EditTask;
