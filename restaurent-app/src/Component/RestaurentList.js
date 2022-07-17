import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import NavBarMenu from "./NavBarMenu";

class RestaurentList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("http://localhost:3000/restaurant").then((response) => {
      response.json().then((result) => {
        this.setState({ RestaurentList: result });
      });
    });
  }

  delete(id) {
    fetch("http://localhost:3000/restaurant/" + id, {
      method: "Delete",
      // headers: {
      //   "Content-Type": "application/json",
      // },
    }).then((result) => {
      result.json().then((resp) => {
        alert("Restaurant Has Been Deleted");
        this.getData();
      });
    });
  }

  render() {
    return (
      <div>
        <NavBarMenu />
        <h1>Restaurant List</h1>
        {this.state.RestaurentList ? (
          <div>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Rating</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {this.state.RestaurentList.map((item, i) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.email}</td>
                    <td>{item.rating}</td>
                    <td>
                      <Link to={"/RestaurantUpdate/" + item.id}>
                        <Button variant="warning">
                          <FontAwesomeIcon icon={faEdit} color="black" />{" "}
                        </Button>
                      </Link>
                      <tab />
                      <Button
                        onClick={() => this.delete(item.id)}
                        variant="danger"
                      >
                        <FontAwesomeIcon icon={faTrash} color="black" />{" "}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>Please Wait..</p>
        )}
      </div>
    );
  }
}

export default RestaurentList;
