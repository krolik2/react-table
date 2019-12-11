import React, { Component } from "react";
import Table from "react-bootstrap/Table";

import FormComponent from './FormComponent'
import TableRow from "./TableRow";

export class TableComponent extends Component {


  state = {
    table: [
      {
        col1: "dummy",
        col2: "data",
        col3: "yo"
      },
    ]
  };


  addNewRow = (row) => {
    let table = [...this.state.table, row]
    this.setState({
      table
    })
  }

  render() {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>col1</th>
              <th>col2</th>
              <th>col3</th>
            </tr>
          </thead>
          <TableRow table={this.state.table} />
        </Table>
        <FormComponent addNewRow={this.addNewRow}/>
      </>
    );
  }
}
