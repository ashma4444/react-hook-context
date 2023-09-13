import Alert from "react-bootstrap/Alert";

function AlertMsg({ variant, msg }) {
  return (
    <>
      <Alert variant={variant}>{msg || "Something wrong"}</Alert>
    </>
  );
}

export default AlertMsg;
