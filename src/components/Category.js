import React, { Component } from 'react';

export default class Category extends Component {
  render() {
    const { name, transactions, balanceCalc } = this.props;
    const total = balanceCalc(transactions);
    return (
      <div>
        <h1>{name}</h1>
        <h3>Total: {total} </h3>
        {transactions.map((t) => (
          <div key={t.vendor}>
            <div>{t.amount}</div>
            <div>{t.vendor}</div>
          </div>
        ))}
      </div>
    );
  }
}
