import React, { Component } from 'react';
import '../styles/Transaction.css';
export default class Transaction extends Component {
  render() {
    const { transactionData } = this.props;
    const removeTransaction = () =>
      this.props.removeTransaction(transactionData._id);
    return (
      <div
        className={
          transactionData.amount < 0
            ? 'positiveTrans transaction '
            : 'negativeTrans transaction '
        }
      >
        <div className="transData">
          <span>Amount: {transactionData.amount}$</span>
          <span>Vendor:{transactionData.vendor}</span>
          <span>Category:{transactionData.category}</span>
        <button onClick={removeTransaction}>Remove</button>
        </div>
      </div>
    );
  }
}

//amount: 3200, vendor: 'Elevation', category: 'Salary'
