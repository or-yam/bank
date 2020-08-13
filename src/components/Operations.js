import React, { Component } from 'react';
import '../styles/Operations.css';

export default class Operations extends Component {
  constructor() {
    super();
    this.state = {
      amount: '',
      vendor: '',
      category: '',
    };
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTransaction = (event) => {
    event.target.value === 'deposit'
      ? this.props.addTransaction(this.state, 'deposit')
      : this.props.addTransaction(this.state, 'withdraw');
    // document.getElementsByTagName('input').value = '';
  };

  render() {
    return (
      <div className="operation-container">
        <div className="operation">
          <div className="form-title">Fill Transaction Details</div>
          <input
            placeholder="Amount"
            onChange={this.onInputChange}
            type="text"
            id="amountInput"
            name="amount"
          />
          <input
            placeholder="Vendor"
            type="text"
            id="vendorInput"
            name="vendor"
            onChange={this.onInputChange}
          />
          <input
            placeholder="Category"
            type="text"
            id="categoryInput"
            name="category"
            onChange={this.onInputChange}
          />
          <div className="btn-container">
            <button
              name="type"
              value="deposit"
              id="depositBtn"
              onClick={this.addTransaction}
            >
              Deposit
            </button>
            <button
              name="type"
              value="withdraw"
              id="withdrawBtn"
              onClick={this.addTransaction}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    );
  }
}
