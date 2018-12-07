import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getUserQuery } from "../queries/queries";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    console.log("Props: ", props);
    this.state = {
      login: "",
      googleId: "",
      firstName: "",
      lastName: "",
      email: "",
      campus: "",
      state: "",
      year: "",
      role: "",
      lastLoggedOn: "",
      once: false,
      currentUser: ""
    };
    this.updateValue = this.updateValue.bind(this);
  }
  updateUserDetails() {
    console.log("Hello Wor");
  }

  setInitialValues() {
    console.log("Props: ", this.props);
    this.setState({ login: this.props.login, currentUser: this.props.login });
  }

  updateValue = event => {
    this.setState({ login: event.target.value });
  };

  displayUserDetails() {
    const { user } = this.props.data;
    if (user) {
      if (user.login != this.state.currentUser) {
        this.state.once = false;
      }
      if (!this.state.once) {
        this.state.once = true;
        this.setInitialValues({ user });
      }
      return (
        <div>
          Login: <br />
          <input
            id="input-login"
            type="text"
            value={this.state.login}
            onChange={this.updateValue}
          />
          <br />
          Google ID: <br />
          <input type="text" placeholder={user.googleId} />
          <br />
          First Name: <br />
          <input type="text" placeholder={user.firstName} />
          <br />
          Last Name: <br />
          <input type="text" placeholder={user.lastName} />
          <br />
          E-mail: <br />
          <input type="text" placeholder={user.email} />
          <br />
          Campus: <br />
          <input type="text" placeholder={user.campus} />
          <br />
          State: <br />
          <input type="text" placeholder={user.state} />
          <br />
          Year: <br />
          <input type="text" placeholder={user.year} />
          <br />
          Role: <br />
          <input type="text" placeholder={user.role} />
          <br />
          Last Logged On: <br />
          <input type="text" placeholder={user.lastLoggedOn} />
          <br />
          <br />
          <button id="save-user" onClick={this.updateUserDetails}>
            Save User
          </button>
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

// <p>Login: {user.login}</p>
//   <p>Google ID: {user.googleId}</p>
//   <p>First Name: {user.firstName}</p>
//   <p>Last Name: {user.lastName}</p>
//   <p>E-mail: {user.email}</p>
//   <p>Campus: {user.campus}</p>
//   <p>State: {user.state}</p>
//   <p>Year: {user.year}</p>
//   <p>Role: {user.role}</p>
//   <p>Last Logged On: {user.lastLoggedOn}</p>
