import React, { Component } from 'react';

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
      <div>
        <div className="operation">
          <h3>Amount</h3>
          <input
            onChange={this.onInputChange}
            type="text"
            id="amountInput"
            name="amount"
          />
          <h3>Vendor</h3>
          <input
            type="text"
            id="vendorInput"
            name="vendor"
            onChange={this.onInputChange}
          />
          <h3>Category</h3>
          <input
            type="text"
            id="categoryInput"
            name="category"
            onChange={this.onInputChange}
          />
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
    );
  }
}
