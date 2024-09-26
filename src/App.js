import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import LoginCard from './components/logincard.js'
 
class App extends Component {
    render() {
        const myStyle = {
            backgroundImage:
                "url('https://images.unsplash.com/photo-1534289692684-c02577d5560d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            height: "100vh",
            marginTop: "-70px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        };
        return (
          <div style={myStyle}>

                <LoginCard />

          </div>
        );
    }
}
 
export default App;

