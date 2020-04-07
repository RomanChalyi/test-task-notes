import React from 'react';
import { Snackbar, SnackbarContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const ErrorMessage = ({ isError, errorInfo, handleCloseErrorMessage = () => {} }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={isError}
      onClose={handleCloseErrorMessage}
      autoHideDuration={5000}
    >
      <SnackbarContent
        aria-describedby="client-snackbar"
        message={errorInfo}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleCloseErrorMessage}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
};

export default ErrorMessage;
