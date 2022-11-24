import { useFormik } from "formik";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import * as yup from "yup";
import "../styles/AddTask.css";

const formValidationSchema = yup.object({
  title: yup.string().required("Title is required"),
  subTasks: yup.array().of(yup.string().required("Cannot be empty")).required(),
});
const AddTask = (props) => {
  const [inputFields, setInputFields] = useState([""]);
  const [subTasks, setSubTasks] = useState([]);

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        title: "",
        description: "",
        subTasks: subTasks,
        status: "Todo",
      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => console.log(values),
    });
  function addInputField(e) {
    console.log(e);
    console.log(errors);
    e.preventDefault();
    setInputFields((inputFields) => [...inputFields, ""]);
    setSubTasks((subTasks) => [...subTasks, ""]);
  }

  function removeInputField(index, e) {
    e.preventDefault();
    const copyInputField = [...inputFields];
    copyInputField.splice(index, 1);
    const subTasksCopy = [...subTasks];
    values.subTasks.splice(index, 1);
    subTasksCopy.splice(index, 1);
    setSubTasks(subTasksCopy);
    setInputFields(copyInputField);
  }
  return (
    <Modal {...props} size="lg" className="addTask_modal_container" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="addNewTask_form">
          <div className="addTask_fieldBox">
            <label>Title</label>
            <input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              name="title"
            />
            <p> {errors.title && touched.title ? errors.title : null}</p>
          </div>
          <div className="addTask_fieldBox">
            <label>Description</label>
            <input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              name="description"
            />
          </div>
          <div className="addTask_fieldBox">
            <label>SubTasks</label>
            {inputFields.map((input, index) => {
              return (
                <div className="addSubTask" key={index}>
                  <input
                    name={`subTasks[${index}]`}
                    placeholder="Add SubTasks"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subTasks[index]}
                    required
                  />
                  <button
                    type="button"
                    onClick={(e) => removeInputField(index, e)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <p>
                    {errors.subTasks && touched.subTasks
                      ? errors.subTasks
                      : null}
                  </p>
                </div>
              );
            })}
            <button
              className="add_subTask_Btn"
              onClick={addInputField}
              type="button"
            >
              <i className="fa-solid fa-plus"></i> Add Sub Task
            </button>
          </div>
          <div className="addTask_fieldBox">
            <label>Status</label>
            <select
              value={values.status}
              onChange={handleChange}
              onBlur={handleBlur}
              name="status"
              id="status"
            >
              <option value="Todo">Todo</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
            <p> {errors.status && touched.status ? errors.status : null}</p>
          </div>
          <button type="submit" className="TaskSubmit_Btn">
            Create Task
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddTask;
