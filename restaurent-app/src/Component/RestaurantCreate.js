import React, { Component } from "react";
import { Button } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import NavBarMenu from "./NavBarMenu";
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';

class RestaurantCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      address: null,
      rating: null,
    };
  }
  create() {
    fetch("http://localhost:3000/restaurant", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        alert("Restaurant Has Been Added");
      });
    });
  }
  render() {
    return (
      <div>
        <NavBarMenu/>
        <h1>Create Restaurant</h1>
        <div>
          <TextField type="text" label="Name"
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
           
          />
          <br />
          <br />

          <TextField type="email" label=" Email"
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
           
          />
          <br />
          <br />

          <TextField type="number" label="Rating"
            onChange={(event) => {
              this.setState({ rating: event.target.value });
            }}
         
          />
          <br />
          <br />

          <TextField type="address" label="Address"
            onChange={(event) => {
              this.setState({ address: event.target.value });
            }}
           
          />
          <br />
          <br />

          <button type="button" class="btn btn-warning"
            onClick={() => {
              this.create();
            }}
          >
            Add Restaurant
          </button>
        </div>
      </div>
    );
  }
}

export default RestaurantCreate;
