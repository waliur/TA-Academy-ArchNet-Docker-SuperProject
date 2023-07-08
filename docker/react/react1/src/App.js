import React from "react";
import axios from "axios";
import "./index.scss";

export default class App extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get("/CS1/users.json").then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <ul className="users">
          {users.map((user) => (
            <li className="user">
              <p>
                <strong>Name Andy Rocks!!!!!:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>City:</strong> {user.address.city}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}