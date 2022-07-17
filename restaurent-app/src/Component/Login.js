import React, { Component } from "react";
import { Button } from "react-bootstrap";
import NavBarMenu from "./NavBarMenu";
import { ValidatorComponent, ValidatorForm } from 'react-material-ui-form-validator';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
    };
  }


  login() {
    console.warn(this.state);
    fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
      data.json().then((resp) => {
        console.warn("resp", resp);
        if(resp.length>0)
        {
            localStorage.setItem('login',JSON.stringify(resp))
            console.warn(this.props.history.push('/'))
        }
        else
        {
            alert("Please Check User Name and Password ")
        }
      });
    });
  }
  render() {
    return (
      <div>
          {/* <NavBarMenu/> */}
        <h1>Login Page</h1>
        <input
          type="text"
          placeholder="User Id"
          name="user"
          validators={['required', 'isname']}
          errorMessages={['This field is required', 'Email is not valid']}
          onChange={(event) => this.setState({ name: event.target.value })}
        />{" "}
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          validators={['required']}
          errorMessages={['This field is required', 'Password is not valid']}
          onChange={(event) => this.setState({ password: event.target.value })}
        />{" "}
        <br />
        <br />
        <Button
          onClick={() => {
            this.login();
          }}
        >
          Login
        </Button>
      </div>
    );
  }
}

export default Login;
