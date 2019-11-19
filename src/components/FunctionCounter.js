import React from "react";
import { Button, Container, Row } from "react-bootstrap";

export default function FunctionCounter() {
  let [count, setCount] = React.useState({
      count: 0
    }),
    IncrementCount = function() {
      setCount({
        count: count.count + 1
      });
    },
    DecrementCount = function() {
      if (count.count === 0) {
        alert("no negative number");
        return;
      }
      setCount({
        count: count.count - 1
      });
    },
    Reset = function() {
      setCount({
        count: 0
      });
    };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <h2>Count: {count.count} </h2>
      </Row>
      <Row className="justify-content-md-center">
        <Button
          className="m-2"
          variant="primary"
          size="lg"
          onClick={() => IncrementCount()}
        >
          +
        </Button>
        <Button
          className="m-2"
          variant="secondary"
          size="lg"
          onClick={() => DecrementCount()}
        >
          -
        </Button>
        <Button
          className="m-3"
          variant="danger"
          size="lg"
          onClick={() => Reset()}
        >
          reset
        </Button>
      </Row>
    </Container>
  );
}
