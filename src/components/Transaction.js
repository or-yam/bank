import React, { Component } from 'react';

export default class Transaction extends Component {
  render() {
    const { transactionData } = this.props;
    const removeTransaction = () =>
      this.props.removeTransaction(transactionData.id);
    return (
      <div>
        <p>
          amount: {transactionData.amount}, vendor:{transactionData.vendor},
          category:{transactionData.category}
        </p>
        <button onClick={removeTransaction}>Remove</button>
      </div>
    );
  }
}

//amount: 3200, vendor: 'Elevation', category: 'Salary'
