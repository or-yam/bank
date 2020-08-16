import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ButtonGroup from '@material-ui/core/ButtonGroup';

// import CustomizedSnackbars from '../components/SnackBar'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  const [amount, setAmount] = useState('');
  const [vendor, setVendor] = useState('');
  const [category, setCategory] = useState('');

  const onAmountChange = (event) => setAmount(event.target.value);

  const onVendorChange = (event) => setVendor(event.target.value);

  const onCategoryChange = (event) => setCategory(event.target.value);

  const addTransaction = (event) => {
    event.currentTarget.value === 'deposit'
      ? props.addTransaction({ amount, vendor, category }, 'deposit')
      : props.addTransaction({ amount, vendor, category }, 'withdraw');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <AccountBalanceIcon /> New Transaction
        </Typography>
        <div className={classes.form} noValidate>
          <TextField
            onChange={onCategoryChange}
            variant="outlined"
            margin="normal"
            fullWidth
            id="category"
            label="Category"
            name="category"
            autoComplete="category"
            autoFocus
          />
          <TextField
            onChange={onVendorChange}
            variant="outlined"
            margin="normal"
            fullWidth
            name="vendor"
            label="Vendor"
            id="vendor"
            autoComplete="Vendor"
          />
          <TextField
            onChange={onAmountChange}
            variant="outlined"
            margin="normal"
            fullWidth
            name="amount"
            label="Amount"
            type="number"
            id="amount"
            autoComplete="Amount"
          />
          <ButtonGroup>
            <Button 
              onClick={addTransaction}
              value="deposit"
              type="Button"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Deposit
            </Button>

            <Button
              onClick={addTransaction}
              value="withdraw"
              type="Button"
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Withdraw
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Container>
  );
}
