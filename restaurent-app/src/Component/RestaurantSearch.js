import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import NavBarMenu from "./NavBarMenu";
class RestaurantSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      noData: false,
      lastSearch:"",
    };
  }

  search(key) {
    console.warn(key);
    fetch("http://localhost:3000/restaurant?q=" + key).then((data) => {
      data.json().then((resp) => {
        console.warn("resp", resp);
        if (resp.length > 0) {
          this.setState({ searchData: resp, noData: false });
        } else {
          this.setState({ noData: true, searchData: null });
        }
      });
    });
  }

  delete(id)
  {
    fetch('http://localhost:3000/restaurant/'+id, {
      method: "Delete",
      // headers: {
      //   "Content-Type": "application/json",
      // },
    }).then((result) => {
      result.json().then((resp) => {
        alert("Restaurant Has Been Deleted");
        this.search()
      });
    });
    
  }
  render() {
    return (
      <div>
        <NavBarMenu/>
        <h1>Restaurant Search</h1>

        <input
          placeholder="Search"
          type="text"
          onChange={(event) => this.search(event.target.value)}
        />
        <div>
          {this.state.searchData ? (
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

               
              {this.state.searchData.map((item) => (
               <tr>
               <td>{item.id}</td>
               <td>{item.name}</td>
               <td>{item.address}</td>
               <td>{item.email}</td>
               <td>{item.rating}</td>
               <td><Link to={"/RestaurantUpdate/"+item.id}><Button variant="warning"><FontAwesomeIcon icon={faEdit} color="black"/> </Button></Link><tab/>
               <Button onClick={()=>this.delete(item.id)} variant="danger"><FontAwesomeIcon icon={faTrash} color="black"/> </Button></td>
             </tr>
              ))}
 </tbody>
              </Table>
            </div>
          ) 
          : (
            ""
          )}

          {this.state.noData ? <h3>Data Not Found</h3> : null}
        </div>
      </div>
    );
  }
}

export default RestaurantSearch;
