import React, { Component } from 'react';
import Category from './Category.js';

export default class Categories extends Component {
  render() {
    const { transactions, removeTransaction } = this.props;
    let categories = {};

    transactions.map((t) =>
      categories[t.category]
        ? categories[t.category].push(t)
        : (categories[t.category] = [t])
    );

    return (
      <div className="categories-container">
        {Object.keys(categories).map((key) => (
          <Category
            key={key}
            balanceCalc={this.props.balanceCalc}
            name={key}
            transactions={categories[key]}
            removeTransaction={removeTransaction}
          />
        ))}
      </div>
    );
  }
}
