import React from "react";
import './App.css';
import { Container, Row } from "react-bootstrap";
import ClassCounter from "./components/ClassCounter";
import FunctionCounter from "./components/FunctionCounter";

function App() {
  return (
    <Container>
        <Row className="justify-content-md-center mb-5">
          <h1>Using Class</h1>
        </Row>
        <ClassCounter />
        <hr/>
        <Row className="justify-content-md-center mb-5">
          <h1>
            Using Function
          </h1>
        </Row>
        <FunctionCounter />
        <hr/>
    </Container>
  );
}

export default App;
