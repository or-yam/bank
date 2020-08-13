import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import Categories from './components/Categories';
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
      const updatedTransactions = [...this.state.transactions, res.data];
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
        axios.get('http://localhost:4000/transactions').then((res) => {
          const updatedTransactions = res.data;
          const updatedBalance = this.balanceCalc(updatedTransactions);
          this.setState({
            transactions: updatedTransactions,
            balance: updatedBalance,
          });
        });
      } else {
        alert('not found');
      }
    });
  };

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Route
            path="/"
            exact
            render={({ match }) => <HomePage match={match} />}
          />
          <Route
            path="/transactions"
            exact
            render={({ match }) => (
              <>
                <Transactions
                  balance={this.state.balance}
                  removeTransaction={this.removeTransaction}
                  transactions={this.state.transactions}
                  match={match}
                />
              </>
            )}
          />
          <Route
            path="/operations"
            exact
            render={({ match }) => (
              <>
                <Operations
                  balance={this.state.balance}
                  addTransaction={this.addTransaction}
                  match={match}
                />
              </>
            )}
          />
          <Route
            path="/categories"
            exact
            render={({ match }) => (
              <>
                <Categories
                  balanceCalc={this.balanceCalc}
                  transactions={this.state.transactions}
                  match={match}
                />
              </>
            )}
          />
        </Router>
      </>
    );
  }
}

export default App;
