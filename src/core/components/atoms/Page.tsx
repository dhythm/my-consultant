import { HEIGHT_NAVBAR } from '@core/lib/constants';
import { useStyles } from '@core/lib/styles';
import { Box, Grid } from '@material-ui/core';
import React from 'react';

interface Props {
  navbar?: boolean;
  header?: JSX.Element;
  footer?: JSX.Element;
  centralized?: boolean;
}

const Page: React.FunctionComponent<Props> = ({
  navbar = true,
  header,
  centralized,
  children,
}) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box className={classes.header}>{header}</Box>
      <Box
        className={classes.body}
        marginTop={navbar ? HEIGHT_NAVBAR : 0}
        paddingX="1em"
      >
        {centralized ? (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{
              minHeight: `calc(100vh- ${navbar ? HEIGHT_NAVBAR : '0px'})`,
            }}
          >
            {children}
          </Grid>
        ) : (
          <>{children}</>
        )}
      </Box>
    </Box>
  );
};

export default Page;
