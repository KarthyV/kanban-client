import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../styles/AddTask.css";

const AddTask = (props) => {
  const [inputFields, setInputFields] = useState([""]);
  const [steps, setSteps] = useState([]);
  function addInputField(e) {
    e.preventDefault();
    setInputFields((inputFields) => [...inputFields, ""]);
    setSteps((steps) => [...steps, ""]);
  }

  function removeInputField(index, e) {
    e.preventDefault();
    const copyInputField = [...inputFields];
    copyInputField.splice(index, 1);
    const stepsCopy = [...steps];
    values.steps.splice(index, 1);
    stepsCopy.splice(index, 1);
    setSteps(stepsCopy);
    setInputFields(copyInputField);
  }
  return (
    <Modal {...props} size="lg" className="addTask_modal_container" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="addNewTask_form">
          <div className="addTask_fieldBox">
            <label>Title</label>
            <input type="text" required />
          </div>
          <div className="addTask_fieldBox">
            <label>Description</label>
            <input type="text" required />
          </div>
          <div className="addTask_fieldBox">
            <label>SubTasks</label>
            {inputFields.map((input, index) => {
              <div key={index}>
                <input
                  // name={`steps[${index}]`}
                  placeholder="Add SubTasks"
                  type="text"
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // value={values.steps[index]}
                  required
                />
                <button
                  type="button"
                  onClick={(e) => removeInputField(index, e)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
                {/* <p>{errors.steps && touched.steps ? errors.steps : null}</p> */}
              </div>;
            })}
            <button onClick={addInputField} type="button">
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <div className="addTask_fieldBox">
            <label>Status</label>
            <select name="status" id="status">
              <option value="Todo">Todo</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTask;
