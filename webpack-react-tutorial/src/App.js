import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navigation from "./js/components/Navigation";
import Album from "./js/components/Album";
import Header from "./js/components/Header";
import Productivity from "./js/pages/Productivity";

const mysections = [
  { title: "Fiat", url: "#" },
  { title: "Fiat2", url: "#" },
  { title: "Fiat3", url: "#" },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Productivity />
      </div>
    );
  }
}

export default App;
