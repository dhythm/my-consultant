import { Button as MuiButton, ButtonProps } from '@material-ui/core';
import React from 'react';

type Props = ButtonProps;

const Button: React.FunctionComponent<Props> = ({
  variant = 'contained',
  children,
  ...props
}) => {
  return (
    <MuiButton variant={variant} color="primary" fullWidth {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;
