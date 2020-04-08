import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Switch, Button } from '@material-ui/core';
import { headerHandler, headerTitle } from './header.module.scss';

export default function ButtonAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box className={headerTitle}>
          <Button component={Link} to="/" variant="text" color="inherit">
            Go Home
          </Button>
        </Box>
        <Box className={headerHandler}>
          <p>EN</p>
          <Switch color="default" />
          <p>RUS</p>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
