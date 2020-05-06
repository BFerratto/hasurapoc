import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { List } from "./components/contextual/courses/List";

const client = new ApolloClient({
  uri: "http://localhost:8080/v1/graphql",
});

const Hello = () => {
  return (
    <ApolloProvider client={client}>
      <List />
    </ApolloProvider>
  );
};

ReactDOM.render(<Hello />, document.getElementById("app"));
