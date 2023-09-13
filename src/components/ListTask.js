import { Accordion, Form } from "react-bootstrap";
import AlertMsg from "./AlertMsg";
import InputGroupComp from "./InputGroupComp";
import SubtaskList from "./SubtaskList";
import TaskCompleted from "./TaskCompleted";

function ListTask({ tasks }) {
  tasks = [
    {
      _id: 0,
      title: "Task 1",
      status: "completed",
      subtasks: [
        { _id: 1, title: "subtask2", status: "completed" },
        { _id: 2, title: "subtask2", status: "pending" },
      ],
    },
    {
      _id: 1,
      title: "Task 2",
      status: "pending",
      subtasks: [{ _id: 3, title: "subtask2", status: "pending" }],
    },
    {
      _id: 2,
      title: "Task 3",
      status: "pending",
      subtasks: [{ _id: 4, title: "subtask2", status: "pending" }],
    },
    {
      _id: 3,
      title: "Task 4",
      status: "pending",
      subtasks: [],
    },
  ];
  return (
    <Accordion defaultActiveKey="0">
      {tasks && tasks.length ? (
        tasks.map((task, index) => {
          return (
            <Accordion.Item key={task._id} eventKey={index}>
              <Accordion.Header>
                <Form
                  className="d-flex justify-content-between"
                  style={{ width: "90%" }}
                >
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    label={task.title || "Label"}
                    defaultChecked={task.status === "completed" ? true : false}
                  />
                  <TaskCompleted total={task.subtasks.length} completed={0} />
                </Form>
              </Accordion.Header>
              <Accordion.Body className="mx-5">
                {/* Subtasks list */}
                {task.subtasks && task.subtasks.length ? (
                  task.subtasks.map((subtask, index) => {
                    return (
                      <SubtaskList
                        key={subtask._id}
                        subtaskTitle={subtask?.title}
                        status={subtask?.status}
                      />
                    );
                  })
                ) : (
                  <AlertMsg msg="No subtask found" variant="danger" />
                )}

                <InputGroupComp
                  label="Add new subtask?"
                  placeholder="Eg: Do Laundry"
                  buttonName="Add the task"
                />
              </Accordion.Body>
            </Accordion.Item>
          );
        })
      ) : (
        <AlertMsg variant="danger" msg="No task found ..." />
      )}
    </Accordion>
  );
}

export default ListTask;
