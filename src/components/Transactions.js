import React from 'react';
import Transaction from './Transaction';
import '../styles/Transactions.css';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable(props) {
  const classes = useStyles();

  return (
    <>
      <div
        className={
          props.balance < 500 ? 'lowBalance balance' : 'highBalance balance'
        }
      >
        <div>Your Current Balance: {props.balance}&nbsp;$</div>
      </div>

      <div className="transactions-table">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Vendor</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Amount&nbsp;($)</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {props.transactions.map((row) => (
                <Transaction
                  key={row._id}
                  row={row}
                  removeTransaction={props.removeTransaction}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
