import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

function InputGroupComp({ label, buttonName, placeholder }) {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>{label || "Label"}</InputGroup.Text>
        <Form.Control placeholder={placeholder || "Placeholder"} />
        <Button variant="success">{buttonName || "Click Me"}</Button>
      </InputGroup>
    </>
  );
}

export default InputGroupComp;
