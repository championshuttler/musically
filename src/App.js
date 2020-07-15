import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import SideBar from "./components/Sidebar";
import "./App.css";
import Logo from "./logo.png";
import Home from "./components/Home";
import artist from "./components/Artist";
import AlbumDetails from "./components/AlbumDetails";

const client = new ApolloClient({
  uri: "https://graphbrainz.herokuapp.com",
});

export class App extends Component {
  render() {
    localStorage.setItem('search', "");
    return (
      <div>
        <SideBar />
        <ApolloProvider client={client}>
          <Router>
            <div className="container">
              <Link to="/">
                <img
                  src={Logo}
                  alt="Artists"
                  style={{ width: 200, display: "block", margin: "auto" }}
                />
              </Link>
              <Route exact path="/" component={Home} />
              <Route exact path="/artist/:mbid" component={artist} />
              <Route
                exact
                path="/album_details/:mbid"
                component={AlbumDetails}
              />
            </div>
          </Router>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
