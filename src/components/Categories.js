import React, { Component } from 'react';
import Category from './Category.js';

export default class Categories extends Component {
  render() {
    const { transactions } = this.props;
    let categories = {};
    transactions.map((t) =>
      categories[t.category]
        ? categories[t.category].push(t)
        : (categories[t.category] = [t])
    );
    return (
      <div>
        <h1>Categories</h1>
        {Object.keys(categories).map((key) => (
          <Category
            key={key}
            balanceCalc={this.props.balanceCalc}
            name={key}
            transactions={categories[key]}
          />
        ))}
      </div>
    );
  }
}
