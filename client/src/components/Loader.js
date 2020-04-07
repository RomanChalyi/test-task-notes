import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

const Loader = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <Box>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
