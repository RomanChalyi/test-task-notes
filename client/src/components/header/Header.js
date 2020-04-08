import React from 'react';
import { AppBar, Toolbar, Typography, Box, Switch } from '@material-ui/core';
import { headerHandler, headerTitle } from './header.module.scss';

export default function ButtonAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={headerTitle} variant="h6">
          My notes
        </Typography>
        <Box className={headerHandler}>
          <p>EN</p>
          <Switch color="default" />
          <p>RUS</p>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
