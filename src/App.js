import React, { Component } from 'react';
import './styles/App.css';
import dummyTransactions from './dummyData/DummyTransactions';
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

  // http://localhost:<server-port>/transactions

  componentDidMount() {
    const transactions = dummyTransactions;
    const balance = dummyTransactions
      .map((t) => t.amount)
      .reduce((acc, sum) => acc + sum, 0);
    this.setState({ balance, transactions });
  }

  addTransaction = (operation, type) => {
    operation['id'] = Math.random();
    if (type === 'withdraw') {
      operation.amount *= -1;
    }
    let updateTransactions = [...this.state.transactions];
    updateTransactions.push(operation);
    let upDateBalance = updateTransactions
      .map((t) => parseInt(t.amount))
      .reduce((acc, sum) => acc + sum, 0);
    upDateBalance < 0
      ? alert('too short')
      : this.setState({
          transactions: updateTransactions,
          balance: upDateBalance,
        });
  };

  removeTransaction = (id) => {
    let updateTransactions = [...this.state.transactions];
    const toRemove = this.state.transactions.findIndex((t) => t.id === id);
    updateTransactions.splice(toRemove, 1);
    this.setState({
      transactions: updateTransactions,
    });
  };

  render() {
    return (
      <div>
        <h1>chiliPepper Pay</h1>
        <Balance balance={this.state.balance} />
        <Transactions removeTransaction={this.removeTransaction} transactions={this.state.transactions} />
        <Operations addTransaction={this.addTransaction} />
      </div>
    );
  }
}

export default App;
