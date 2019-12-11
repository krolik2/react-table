import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class FormComponent extends Component {
  state = {
    company: "",
    appliedDate: "",
    response: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewRow(this.state);
    this.setState({
      col1: "",
      col2: "",
      col3: ""
    });
  };

  handelChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Control
            type="text"
            placeholder="enter first col data..."
            name="col1"
            onChange={this.handelChange}
            value={this.state.col1}
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Control
            type="text"
            placeholder="enter second col data..."
            name="col2"
            onChange={this.handelChange}
            value={this.state.col2}
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Control
            type="text"
            placeholder="enter third col data..."
            name="col3"
            onChange={this.handelChange}
            value={this.state.col3}
          />
        </Form.Group>
        <Button
          size="lg"
          variant="primary"
          type="submit"
          onClick={this.handleSubmit}
        >
          Submit
        </Button>
      </Form>
    );
  }
}
