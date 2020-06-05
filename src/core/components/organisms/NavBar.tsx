import { HEIGHT_NAVBAR } from '@core/lib/constants';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import React from 'react';

interface Props {
  title: string;
}

const NavBar: React.FunctionComponent<Props> = ({ title }) => {
  return (
    <AppBar
      position="fixed"
      style={{ height: HEIGHT_NAVBAR, justifyContent: 'center' }}>
      <Typography align="center" variant="h6">
        {title}
      </Typography>
    </AppBar>
  );
};

export default NavBar;
