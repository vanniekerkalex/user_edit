import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//components
import ShowUsers from "./components/ShowUsers";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="Main">
          <h1>User Management</h1>
          <ShowUsers />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
