import React from 'react';
import { Snackbar, SnackbarContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next';

const ErrorMessage = ({ isError, errorInfo, hideErrorMessage }) => {
  const { t } = useTranslation();
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={isError}
      onClose={hideErrorMessage}
      autoHideDuration={5000}
    >
      <SnackbarContent
        style={{ background: 'red' }}
        aria-describedby="client-snackbar"
        message={t(`${errorInfo}.1`)}
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={hideErrorMessage}>
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
};

export default ErrorMessage;
