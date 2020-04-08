import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { footer, footerText } from './footer.module.scss';

export default function ButtonAppBar() {
  return (
    <Box className={footer}>
      <Typography variant="h6" className={footerText}>
        version : 0.0.1
      </Typography>
    </Box>
  );
}
