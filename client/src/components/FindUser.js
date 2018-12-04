import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getUserQuery } from "../queries/queries";

// components

class FindUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: null
    };
  }
  searchUser() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading...</div>;
    } else {
      return data.user.map(users => {
        return (
          <li
            key={users.login}
            onClick={e => {
              this.setState({ selected: users.login });
            }}
          >
            {users.login}
          </li>
        );
      });
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <ul id="user-list">{this.searchUser()}</ul>
      </div>
    );
  }
}

//export default graphql(getUserQuery)(FindUser);

export default graphql(getUserQuery, {
  options: props => {
    return {
      variables: {
        login: props.login
      }
    };
  }
})(FindUser);
