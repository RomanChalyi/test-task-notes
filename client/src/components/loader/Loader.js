import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { loader } from './loader.module.scss';

const Loader = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <Box className={loader}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
