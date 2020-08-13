import React, { Component } from 'react';
import Transaction from './Transaction';
import '../styles/Transactions.css';
export default class Transactions extends Component {
  render() {
    const { transactions, balance } = this.props;
    if (!transactions.length) {
      return (
        <div>
          <h1>No transactions found</h1>
        </div>
      );
    } else {
      return (
        <div className="transactions-container">
          <div
            className={
              balance < 500 ? 'lowBalance balance' : 'highBalance balance'
            }
          >
            <span>Your Current Balance : {balance}$</span>
          </div>

          <div className="transactions">
            {transactions.map((t) => (
              <Transaction
                key={t._id}
                removeTransaction={this.props.removeTransaction}
                transactionData={t}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}
