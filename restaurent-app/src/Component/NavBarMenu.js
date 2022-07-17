import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faEdit,
  faTrash,
  faList,
  faHome,
  faPlus,
  faSearch,
  faInfoCircle,
  faWrench,
  faUtensils,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
class NavBarMenu extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <div class="btn-group">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">
                  {/* <Link to="/">
                    <Button variant="info">
                      Restaurant <FontAwesomeIcon icon={faUtensils} />
                    </Button>
                  </Link> */}
                </Nav.Link>

                <Nav.Link href="#home">
                  <Link to="/">
                    <Button variant="dark">
                      Home <FontAwesomeIcon icon={faHome} />
                    </Button>
                  </Link>
                </Nav.Link>

                <Nav.Link href="#link">
                  <Link to="/RestaurantCreate">
                    {" "}
                    <Button variant="dark">
                      Create <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  </Link>
                </Nav.Link>

                <Nav.Link href="#RestaurantDetails">
                  <Link to="/RestaurantDetails">
                    {" "}
                    <Button variant="dark">
                      {" "}
                      Details <FontAwesomeIcon icon={faInfoCircle} />{" "}
                    </Button>
                  </Link>
                </Nav.Link>

                <Nav.Link href="#RestaurantSearch">
                  <Link to="/RestaurantSearch">
                    {" "}
                    <Button variant="dark">
                      Search <FontAwesomeIcon icon={faSearch} />
                    </Button>
                  </Link>
                </Nav.Link>

                <Nav.Link href="#RestaurentList">
                  <Link to="/RestaurentList">
                    {" "}
                    <Button variant="dark">
                      Update <FontAwesomeIcon icon={faWrench} />
                    </Button>
                  </Link>
                </Nav.Link>

                <Nav.Link href="#RestaurentList">
                  <Link to="/RestaurentList">
                    {" "}
                    <Button variant="dark">
                      List <FontAwesomeIcon icon={faList} />
                    </Button>
                  </Link>
                </Nav.Link>

                {
                localStorage.getItem('login') ? 
                  <Nav.Link href="#link">
                    <Link to="/login">
                      {" "}
                      <Button variant="dark">
                        Logout <FontAwesomeIcon icon={faUser} />
                      </Button>
                    </Link>
                  </Nav.Link>
                :  
                  <Nav.Link href="#link">
                    <Link to="/login">
                      {" "}
                      <Button variant="dark">
                        Login <FontAwesomeIcon icon={faUser} />
                      </Button>
                    </Link>
                  </Nav.Link>
                }
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default NavBarMenu;
