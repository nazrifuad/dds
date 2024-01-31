import React, { Component } from "react";
import "./css/main.css";
import HeaderRoutes from "./components/Routes/HeaderRoutes";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    this.callAPI();
    //this.checkLoginStatus();
  }

  callAPI() {
    fetch("http://localhost:3000/api/v1/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data.data || [] }))
      .catch((error) => console.error("Error fetching data:", error));
  }

  render() {
    const { users } = this.state;

    return (
      <main className="main-content">
        <HeaderRoutes />
        {/* <ul>
          {users.map((user) => (
            <li key={user.id}>
              {`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`}
            </li>
          ))}
        </ul> */}
        {this.props.children}
      </main>
    );
  }

  checkLoginStatus() {
    Axios.get("http://localhost:3000/api/v1/users/login")
      .then((res) => {
        console.log(res);
        // Handle response here
      })
      .catch((error) => console.error("Error checking login status:", error));
  }
}

export default App;
