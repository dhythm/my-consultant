import {
  Box,
  Button,
  Card as MuiCard,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from '@material-ui/core';
import React from 'react';

interface Props {
  title: string;
  contents: string[];
  buttonText: string;
  onClick?: () => void;
}

const Card: React.FunctionComponent<Props> = ({
  title,
  contents,
  buttonText,
  onClick,
}) => {
  return (
    <MuiCard elevation={5}>
      <CardContent>
        <Typography variant="h6" component="h2" align="center">
          {title}
        </Typography>
        <Box paddingY="1em">
          <Divider />
        </Box>
        {contents.map((v, i) => (
          <Typography key={i} align="center">
            {v}
          </Typography>
        ))}
      </CardContent>
      <CardActions onClick={onClick}>
        <Button size="small" fullWidth>
          {buttonText}
        </Button>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
