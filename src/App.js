import React from "react";
import Screens from "./screens";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/client";
//import AuthContext from "./auth/authContext";

const client = new ApolloClient({
  uri: "http://localhost:9000/graphql",
  credentials: "include",
});

function App() {
  return (
    // <AuthContext.Provider>
    <ApolloProvider client={client}>
      <div className="container">
        <Screens />
      </div>
    </ApolloProvider>
    //{" "}
    //</AuthContext.Provider>
  );
}

export default App;
