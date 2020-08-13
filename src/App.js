import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import Transactions from './components/Transactions';
import Balance from './components/Balance';
import Operations from './components/Operations';
class App extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      balance: '',
    };
  }

  balanceCalc = (transArr) =>
    transArr.map((t) => t.amount).reduce((acc, sum) => acc + sum, 0);

  componentDidMount() {
    axios.get('http://localhost:4000/transactions').then((res) => {
      const transactions = res.data;
      const balance = this.balanceCalc(transactions);
      this.setState({ balance, transactions });
    });
  }

  addTransaction = (operation, type) => {
    if (type === 'withdraw') {
      operation.amount *= -1;
    }
    axios.post('http://localhost:4000/transaction', operation).then((res) => {
      const updatedTransactions = [res.data, ...this.state.transactions];
      const updatedBalance = this.balanceCalc(updatedTransactions);
      updatedBalance < 0
        ? alert('too short')
        : this.setState({
            transactions: updatedTransactions,
            balance: updatedBalance,
          });
    });
  };

  removeTransaction = (id) => {
    axios.delete(`http://localhost:4000/transaction/${id}`).then((res) => {
      if (res.data === 'success') {
        let updatedTransactions = [...this.state.transactions];

        const indexToRemove = this.state.transactions.findIndex(
          (t) => t.id === id
        );
        updatedTransactions.splice(indexToRemove, 1);

        const updatedBalance = this.balanceCalc(updatedTransactions);
        this.setState({
          transactions: updatedTransactions,
          balance: updatedBalance,
        });
      } else {
        alert('not found');
      }
    });
  };

  render() {
    return (
      <div>
        <h1>chiliPepper Pay</h1>
        <Balance balance={this.state.balance} />
        <Transactions
          removeTransaction={this.removeTransaction}
          transactions={this.state.transactions}
        />
        <Operations addTransaction={this.addTransaction} />
      </div>
    );
  }
}

export default App;
