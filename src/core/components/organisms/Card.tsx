import Button from '@core/components/atoms/Button';
import {
  ButtonProps,
  Card as MuiCard,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@material-ui/core';
import React from 'react';

interface Props {
  title: string;
  subheader?: string;
  contents: string | string[];
  buttonText?: string;
  buttonVariant?: ButtonProps['variant'];
  onClick?: () => void;
}

const Card: React.FunctionComponent<Props> = ({
  title,
  subheader,
  contents,
  buttonText,
  buttonVariant = 'outlined',
  onClick,
}) => {
  return (
    <MuiCard elevation={5}>
      <CardHeader
        {...{ title, subheader }}
        titleTypographyProps={{ align: 'center' }}
        subheaderTypographyProps={{ align: 'center' }}
      />
      <Divider />
      <CardContent>
        {typeof contents === 'string' ? (
          <Typography align="center">{contents}</Typography>
        ) : (
          <>
            {contents.map((v, i) => (
              <Typography key={i} align="center">
                {v}
              </Typography>
            ))}
          </>
        )}
      </CardContent>
      {buttonText && (
        <CardActions onClick={onClick}>
          <Button size="small" variant={buttonVariant}>
            {buttonText}
          </Button>
        </CardActions>
      )}
    </MuiCard>
  );
};

export default Card;
