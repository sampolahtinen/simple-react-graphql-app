import React from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { InMemoryCache } from "apollo-cache-inmemory";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import MainPage from "../src/pages/MainPage";
import HistoryPage from "../src/pages/HistoryPage";
import ProfilePage from "../src/pages/ProfilePage";
import Layout from "../src/components/Layout";

import visitedPersons from "./redux/reducers.js";

const cache = new InMemoryCache();

const client = new ApolloClient({
  // Had to remove httpLink, in order to get GraphQL talk to the server
  uri: "https://api.graphcms.com/simple/v1/swapi",
  cache
});

const store = createStore(visitedPersons);

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ReduxProvider store={store}>
          <Layout>
            <div className="App">
              <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/person/:id" component={ProfilePage} />
                <Route path="/history" component={HistoryPage} />
              </Switch>
            </div>
          </Layout>
        </ReduxProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export { App };
