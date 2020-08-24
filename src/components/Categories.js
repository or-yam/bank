import React from 'react';
import Category from './Category.js';

const Categories = (props) => {
  const { transactions, removeTransaction } = props;
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
          balanceCalc={props.balanceCalc}
          name={key}
          transactions={categories[key]}
          removeTransaction={removeTransaction}
        />
      ))}
    </div>
  );
};
export default Categories;
