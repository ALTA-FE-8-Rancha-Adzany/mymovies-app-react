import React, { Component } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./App.css";
import axios, { Axios } from "axios";

export default class App extends Component {
  state = {
    film: [],
  };
  componentDidMount() {
    axios
      .get("https://api.themoviedb.org/3/discover/movie", {
        params: {
          api_key: "c337987b84f52427fcce881bc1656f8a",
        },
      })
      .then((response) => {
        this.setState({
          film: response.data.results,
        });
      });
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="App-header">
          <div className="container d-flex flex-wrap justify-content-evenly align-content-between">
            {this.state.film.map((film) => {
              return <Card data={film} key={film.id} />;
            })}
          </div>
        </div>
      </>
    );
  }
}
