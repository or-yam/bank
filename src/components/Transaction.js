import React, { Component } from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

export default class Row extends Component {
  render() {
    const { row, formatNumber } = this.props;
    const removeTransaction = () =>
      this.props.removeTransaction(this.props.row._id);
    return (
      <TableRow
        key={row.vendor}
        style={{
          backgroundColor: row.amount < 0 ? '#f6685e' : '#a2cf6e',
        }}
      >
        <TableCell component="th" scope="row">
          {row.vendor}
        </TableCell>
        <TableCell align="right">{row.category}</TableCell>
        <TableCell align="right">{formatNumber(row.amount)}</TableCell>
        <TableCell align="right">
          <Button onClick={removeTransaction} variant="contained">
            <DeleteIcon />
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}
