import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { getUserQuery } from "../queries/queries";

// components
import UserDetails from "./UserDetails";
//dummy lists
// var books = [
//   { name: "Name of the Wind", genre: "Fantasy", id: "1" },
//   { name: "The Final Empire", genre: "Fantasy", id: "2" },
//   { name: "The Long Earth", genre: "Sci-Fi", id: "3" }
// ];

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: null
    };
  }
  findUser(login) {
    if (login) {
      //this.setState({ googleId: this.props.data.googleId });
      console.log("The login is: " + login);
    } else {
      console.log("Please enter a valid login name.");
    }
    // this.props.getUserQuery({
    //   variables: {
    //     login: login //this.state.login
    //   }
    // });
  }
  render() {
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
  }
}

// export default graphql(getUserQuery, { name: "getUserQuery" })(EditUser);

// export default graphql(EditUser);

export default graphql(getUserQuery, {
  options: {
    variables: {
      login: this.state.login
    }
  }
})(EditUser);

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
