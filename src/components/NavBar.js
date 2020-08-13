import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="main-nav">
          <ul className="menu">
            <li>
              <Link to="/">
                <img
                  src="https://image.flaticon.com/icons/svg/714/714286.svg"
                  alt="logo"
                />
                <span>ChiliPepper Pay</span>
              </Link>
            </li>

            <li>
              <Link to="/transactions">
                <img
                  src="https://image.flaticon.com/icons/svg/3176/3176253.svg"
                  alt="trans"
                />
                <span>Transactions</span>
              </Link>
            </li>
            <li>
              <Link to="/operations">
                <img
                  src="https://image.flaticon.com/icons/svg/909/909670.svg"
                  alt="operation"
                />
                <span>New Transaction</span>
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
