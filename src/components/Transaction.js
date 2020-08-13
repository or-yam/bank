import React, { Component } from 'react';
import '../styles/Transaction.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
export default class Transaction extends Component {
  render() {
    const { transactionData } = this.props;
    const removeTransaction = () =>
      this.props.removeTransaction(transactionData._id);
    return (
      <div
        className={
          transactionData.amount < 0
            ? 'negativeTrans transaction '
            : 'positiveTrans transaction '
        }
      >
        <div className="transData">
          <span>Amount: {transactionData.amount}$</span>
          <span>Vendor:{transactionData.vendor}</span>
          <span>Category:{transactionData.category}</span>
          <Button onClick={removeTransaction} variant="contained">
            <DeleteIcon />
          </Button>
        </div>
      </div>
    );
  }
}

//amount: 3200, vendor: 'Elevation', category: 'Salary'
