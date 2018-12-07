import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getUsersQuery } from "../queries/queries";

// components
import UserDetails from "./UserDetails";
//import NewUser from "./NewUser";

class ShowUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  displayUsers() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading...</div>;
    } else {
      return data.users.map(user => {
        return (
          <li
            key={user.login}
            onClick={e => {
              this.setState({ selected: user.login });
            }}
          >
            {user.login}
          </li>
        );
      });
    }
  }
  render() {
    //console.log(this.state.selected);
    return (
      <div>
        <ul id="user-list">{this.displayUsers()}</ul>
        <UserDetails login={this.state.selected} />
        {/* <NewUser /> */}
        <button>New User</button>
      </div>
    );
  }
}

export default graphql(getUsersQuery)(ShowUsers);
