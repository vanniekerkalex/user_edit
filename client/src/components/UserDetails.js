import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getUserQuery } from "../queries/queries";

class UserDetails extends Component {
  displayUserDetails() {
    const { user } = this.props.data;
    if (user) {
      return (
        <div>
          <p>Login: {user.login}</p>
          <p>Google ID: {user.googleId}</p>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>E-mail: {user.email}</p>
          <p>Campus: {user.campus}</p>
          <p>State: {user.state}</p>
          <p>Year: {user.year}</p>
          <p>Role: {user.role}</p>
          <p>Last Logged On: {user.lastLoggedOn}</p>
          <br />
          <button id="edit-user">Edit User</button>
        </div>
      );
    } else {
      return <div>No user selected...</div>;
    }
  }
  render() {
    return <div id="user-details">{this.displayUserDetails()}</div>;
  }
}

export default graphql(getUserQuery, {
  options: props => {
    return {
      variables: {
        login: props.login
      }
    };
  }
})(UserDetails);

// login: { type: new GraphQLNonNull(GraphQLString) },
// googleId: { type: new GraphQLNonNull(GraphQLString) },
// firstName: { type: new GraphQLNonNull(GraphQLString) },
// lastName: { type: new GraphQLNonNull(GraphQLString) },
// email: { type: new GraphQLNonNull(GraphQLString) },
// campus: { type: new GraphQLNonNull(GraphQLString) },
// state: { type: new GraphQLNonNull(GraphQLString) },
// year: { type: new GraphQLNonNull(GraphQLInt) },
// role: { type: new GraphQLNonNull(GraphQLString) },
// lastLoggedOn: { type: new GraphQLNonNull(GraphQLString) }
