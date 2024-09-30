import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import LoginApp from './components/logincard/logincard.js'
import Homepage from "./components/homepage/homepage.js";
 
class App extends Component {
    render() {
        return (
          <div>
                <Homepage />
          </div>
        );
    }
}
 
export default App;

