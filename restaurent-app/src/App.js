import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Component/Home";
import RestaurantCreate from "./Component/RestaurantCreate";
import RestaurantDetails from "./Component/RestaurantDetails";
import RestaurantSearch from "./Component/RestaurantSearch";
import RestaurantUpdate from "./Component/RestaurantUpdate";
import RestaurentList from "./Component/RestaurentList";
import Login from "./Component/Login";
import Logout from "./Component/Logout";
import Protected from "./Component/Protected";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Route path="/RestaurentList">
          <RestaurentList />
        </Route>

        <Route path="/RestaurantCreate">
          <RestaurantCreate />
        </Route>

        <Route path="/RestaurantDetails">
          <RestaurantDetails />
        </Route>

        <Route path="/RestaurantSearch">
          <RestaurantSearch />
        </Route> */}

        <Route path="/Logout">
          <Logout />
        </Route>

        {/* <Route
          path="/RestaurantUpdate/:id"
          render={(props) => <RestaurantUpdate {...props} />}
        ></Route> */}

        <Route path="/Login" render={(props) => <Login {...props} />}></Route>

        {/* <Route exact path="/">
          <Home />
        </Route> */}

        <Protected
          exact
          path="/RestaurantSearch"
          component={RestaurantSearch}
        />
        <Protected
          exact
          path="/RestaurantDetails"
          component={RestaurantDetails}
        />
        <Protected
          exact
          path="/RestaurantCreate"
          component={RestaurantCreate}
        />
        <Protected exact path="/RestaurentList" component={RestaurentList} />
        <Protected
          exact
          path="/RestaurantUpdate/:id"
          component={RestaurantUpdate}
        />
        <Protected exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
