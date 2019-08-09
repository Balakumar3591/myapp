import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class AppComponent extends Component {
    render() {
      return (
          <div>
                <h2>Welcome to AppComponent Tutorial!!!</h2>
            <img src = {logo} />
          </div>
      );
    }
}

export default AppComponent;