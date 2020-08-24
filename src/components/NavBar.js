import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CreateIcon from '@material-ui/icons/Create';
import MenuIcon from '@material-ui/icons/Menu';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, left: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link to="/">
          <ListItem button key={'home'}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
        </Link>

        <Divider />

        <Link to="/transactions">
          <ListItem button key={'transactions'}>
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary={'Transactions'} />
          </ListItem>
        </Link>

        <Link to="/categories">
          <ListItem button key={'category'}>
            <ListItemIcon>
              <BubbleChartIcon />
            </ListItemIcon>
            <ListItemText primary={'Categories'} />
          </ListItem>
        </Link>

        <Link to="/operations">
          <ListItem button key={'operation'}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary={'New Transaction'} />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div className="main-nav">
      <React.Fragment key={'left'}>
        <Button onClick={toggleDrawer('left', true)}>
          <MenuIcon fontSize="large" />
        </Button>
        <Link to="/">
          <AccountBalanceIcon fontSize="large" />
        </Link>

        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
