import React from "react";

function TaskCompleted({ total, completed }) {
  return (
    <span>
      {completed} completed out of {total}
    </span>
  );
}

export default TaskCompleted;
