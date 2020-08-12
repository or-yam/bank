import React, { Component } from 'react';

export default class Balance extends Component {
  render() {
    const balance = this.props.balance;
    return <div>Your Current Balance : {balance}$</div>;
  }
}
