import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
export default class HomePage extends Component {
  render() {
    return (
      <div className="welcome-container">
        <img
          src="https://image.flaticon.com/icons/svg/714/714286.svg"
          alt="logo"
        />
        <Link to="/transactions">
          <h1>WELCOME</h1>
        </Link>
      </div>
    );
  }
}
