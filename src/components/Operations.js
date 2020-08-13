import React, { Component } from 'react';
import '../styles/Operations.css';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';

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
            <Button
              variant="contained"
              color="primary"
              name="type"
              value="deposit"
              id="depositBtn"
              onClick={this.addTransaction}
            >
              Deposit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              name="type"
              value="withdraw"
              id="withdrawBtn"
              onClick={this.addTransaction}
            >
              Withdraw
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
