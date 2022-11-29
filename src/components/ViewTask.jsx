import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/ViewTask.css";

const ViewTask = (props) => {
  const navigate = useNavigate();
  useEffect(() => {}, []);

  return (
    <Modal {...props} size="lg" className="addTask_modal_container" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">View Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 className="viewTask_description">No description</h3>
        <div className="viewTask_subTasks">
          <h3 className="subTasks_title">SubTasks (0 of 3)</h3>
          <p className="subTask">- Create form</p>
          <p className="subTask">- Use bootstrap</p>
        </div>
        <div className="viewTask_status">
          <h3 className="viewTask_status_key">Current Status</h3>
          <p className="viewTask_status_value">Todo</p>
        </div>
        <div className="viewTask_btn">
          <button
            className="edit"
            onClick={() => navigate(`/tasks/edit/${9898}`)}
          >
            <i className="fa-solid fa-pen "></i>
            Edit
          </button>
          <button className="delete">
            <i className="fa-solid fa-trash "></i>
            Delete
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ViewTask;
