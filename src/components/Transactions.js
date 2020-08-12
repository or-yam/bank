import React, { Component } from 'react';
import Transaction from './Transaction';
export default class Transactions extends Component {
  render() {
    const { transactions } = this.props;
    return (
      <div>
        {transactions.map((t) => (
          <Transaction
            removeTransaction={this.props.removeTransaction}
            transactionData={t}
          />
        ))}
      </div>
    );
  }
}
