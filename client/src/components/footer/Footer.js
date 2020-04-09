import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { footer, footerText } from './footer.module.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box className={footer}>
      <Typography variant="h6" className={footerText}>
        {t('version.1')} : 0.0.1
      </Typography>
    </Box>
  );
};
export default Footer;
