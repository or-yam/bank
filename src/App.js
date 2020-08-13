import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Transactions from './components/Transactions';
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
      <>
        <Router>
          <nav className="main-nav">
            <ul className="menu">
              <li>
                <Link to="/">
                  <img
                    src="https://image.flaticon.com/icons/svg/714/714286.svg"
                    alt="logo"
                  />
                  <span>ChiliPepper Pay</span>
                </Link>
              </li>

              <li>
                <Link to="/transactions">
                  <img
                    src="https://image.flaticon.com/icons/svg/3176/3176253.svg"
                    alt="trans"
                  />
                  <span>Transactions</span>
                </Link>
              </li>
              <li>
                <Link to="/operations">
                  <img
                    src="https://image.flaticon.com/icons/svg/909/909670.svg"
                    alt="operation"
                  />
                  <span>New Transaction</span>
                </Link>
              </li>
            </ul>
          </nav>

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
        </Router>
      </>
    );
  }
}

export default App;
