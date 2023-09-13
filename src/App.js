// import Car from "./Car";
// import ColorSchemesExample from "./Navbar";
// import { Button } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import AlertMsg from "./components/AlertMsg";
import "./App.css";
import { Container, Col, Row } from "react-bootstrap";
import CustomHookDemo from "./CustomHookDemo";
import HookDemo from "./HookDemo";
import InputGroupComp from "./components/InputGroupComp";
import ListTask from "./components/ListTask";
import NavBar from "./components/Navbar";
import Title from "./components/Title";
import Toaster from "./components/Toaster";
import { useThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme } = useThemeContext();
  return (
    // fragments
    <div className={`${theme}`}>
      {/* <ColorSchemesExample />
      <div className="App">hello world</div>
      <Car color="red" />
      <Button variant="outline-primary">Primary</Button>

      <InputGroup className="mb-3 w-50">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <Button variant="success">Button</Button>
      </InputGroup> */}

      <NavBar />
      <Toaster />
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Title title="TODO APP" />
            <InputGroupComp
              label="Add new Todo?"
              placeholder="Eg: Do Laundry"
              buttonName="Add the task"
            />

            <ListTask tasks="Do Laundry" />
            {/* <AlertMsg variant="danger" msg="Error found" /> */}
          </Col>
        </Row>
      </Container>

      <HookDemo />

      <CustomHookDemo />
    </div>
  );
}

export default App;
