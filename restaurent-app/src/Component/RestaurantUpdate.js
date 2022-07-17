import React, { Component } from "react";
import { Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import NavBarMenu from "./NavBarMenu";
class RestaurantUpdate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            address: null,
            rating: null,
            id: null,
        };
      }
    componentDidMount()
    {
        fetch('http://localhost:3000/restaurant/'+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.warn(result)
              this.setState({
                  name: result.name,
                  email:result.email,
                  address:result.address,
                  rating:result.rating,
                  id:result.id,
               });
            });
          });
    }
   
    update()
    {
        fetch("http://localhost:3000/restaurant/"+this.state.id, {
            method: "Put",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
          }).then((result) => {
            result.json().then((resp) => {
              alert("Restaurant Has Been Updated");
            });
          });
    }

  render() {
    // console.warn(this.state);
    return (
      <div>
        <NavBarMenu/>
        <h1>Restaurant Update</h1>

        <div>
          <TextField
            label="Name" type="text" InputLabelProps={{shrink: true,}} value={this.state.name}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          />
          <br />
          <br />

          <TextField type="email"
            label="Email" InputLabelProps={{shrink: true,}} value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
          <br />
          <br />

          <TextField type="number"
            label="Rating" InputLabelProps={{shrink: true,}} value={this.state.rating}
            onChange={(event) => {
              this.setState({ rating: event.target.value });
            }}
          />
          <br />
          <br />

          <TextField
            label="Address" type="address" InputLabelProps={{shrink: true,}} value={this.state.address}
            onChange={(event) => {
              this.setState({ address: event.target.value });
            }}
          />
          <br />
          <br />

          <button type="button" class="btn btn-success"
            onClick={() => {
              this.update();
            }}
          >
            Update Restaurant
          </button>
        </div>
      </div>
    );
  }
}

export default RestaurantUpdate;
