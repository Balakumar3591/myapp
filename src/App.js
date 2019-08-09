import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

// class-based components example
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <p>This is working</p>
        <Person name="Bala" age="28" />
        <Person name="Kumar" age="29">
          My Hobby: Playing Cricket
        </Person>
        <Person name="Anbu" age="60" />
        {/* Person.js file content is retrieved and rendered in UI Page */}
        {/* </Person> is a self closing tag  */}
      </div>
    );

    // return React.createElement("div", null, "h1", "Hi, I'm a React App!!!");
    //return React.createElement("div", null, React.createElement('h1',null, "Does this work now?"));
    //return React.createElement("div", {className:'App'}, React.createElement('h1',null, "Does this work now?"));
  }
}

export default App;
