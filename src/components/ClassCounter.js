import React, { Component } from "react";
import { Button, Container, Row } from "react-bootstrap";

export default class classCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    if (this.state.count === 0) {
      alert("no negative number");
      return;
    }
    this.setState({
      count: this.state.count - 1
    });
  };

  reset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    let { count } = this.state;
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h2>Count: {count} </h2>
        </Row>
        <Row className="justify-content-md-center">
          <Button
            className="m-2"
            variant="primary"
            size="lg"
            onClick={() => this.incrementCount()}
          >
            +
          </Button>
          <Button
            className="m-2"
            variant="secondary"
            size="lg"
            onClick={() => this.decrementCount()}
          >
            -
          </Button>
          <Button
            className="m-3"
            variant="danger"
            size="lg"
            onClick={() => this.reset()}
          >
            reset
          </Button>
        </Row>
      </Container>
    );
  }
}
