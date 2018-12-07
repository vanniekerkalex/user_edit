import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getUserQuery } from "../queries/queries";
import { newUserMutation } from "../queries/queries";

class NewUser extends Component {
  saveUserDetails() {
    const { user } = this.props.data;
    if (user) {
      return (
        <form id="user-info">
          Login: <br />
          <input
            type="text"
            name="login"
            onChange={e => this.setState({ login: e.target.value })}
          />
          <br />
          Google ID: <br />
          <input
            type="text"
            name="google-id"
            onChange={e => this.setState({ googleId: e.target.value })}
          />
          <br />
          First Name: <br />
          <input
            type="text"
            name="fname"
            onChange={e => this.setState({ firstName: e.target.value })}
          />
          <br />
          Last Name: <br />
          <input
            type="text"
            name="lname"
            onChange={e => this.setState({ lastName: e.target.value })}
          />
          <br />
          E-mail: <br />
          <input
            type="text"
            name="email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <br />
          Campus: <br />
          <input
            type="text"
            name="campus"
            onChange={e => this.setState({ campus: e.target.value })}
          />
          <br />
          State: <br />
          <input
            type="text"
            name="state"
            onChange={e => this.setState({ state: e.target.value })}
          />
          <br />
          Year: <br />
          <input
            type="text"
            name="year"
            onChange={e => this.setState({ year: e.target.value })}
          />
          <br />
          Role: <br />
          <input
            type="text"
            name="role"
            onChange={e => this.setState({ role: e.target.value })}
          />
          <br />
          Last Logged On: <br />
          <input
            type="text"
            name="last-logged-on"
            onChange={e => this.setState({ lastLoggedOn: e.target.value })}
          />
          <br />
          <br />
          <button
            type="submit"
            name="action"
            value="find"
            onClick={e => {
              e.preventDefault();
              this.findUser(this.state.login);
            }}
          >
            Find User
          </button>
          {/* <button type="submit" name="action" value="update" onClick={updateUser}>
          Add / Save User
        </button>
        <button type="submit" name="action" value="delete" onClick={deleteUser}>
          Delete User
        </button> */}
        </form>
      );
    } else {
      return <div>No user selected...</div>;
    }
  }
  render() {
    return <div id="user-details">{this.saveUserDetails()}</div>;
  }
}

export default graphql(newUserMutation, {
  options: props => {
    return {
      variables: {
        login: props.login,
        googleId: props.googleId,
        firstName: props.firstName,
        lastName: props.lastName,
        email: props.email,
        campus: props.campus,
        state: props.state,
        year: props.year,
        role: props.role,
        lastLoggedOn: props.lastLoggedOn
      }
    };
  }
})(NewUser);

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
