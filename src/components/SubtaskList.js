import { FaTrashAlt } from "react-icons/fa";
import { Form } from "react-bootstrap";
import React from "react";
import PopupAlert from "../utils/popUpAlert";

function SubtaskList({ subtaskTitle, status }) {
  const deleteSubTask = () => {
    PopupAlert({ title: "Are you ready?" });
  };

  return (
    <div className="p-2">
      <Form className="d-flex align-items-center justify-content-between">
        <Form.Check // prettier-ignore
          type="checkbox"
          defaultChecked={status === "completed" ? true : false}
          label={subtaskTitle}
        />
        <FaTrashAlt onClick={deleteSubTask} />
      </Form>
    </div>
  );
}

export default SubtaskList;
