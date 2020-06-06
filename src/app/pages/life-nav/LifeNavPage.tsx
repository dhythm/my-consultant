import { categories } from '@app/lib/constants';
import Page from '@core/components/atoms/Page';
import Card from '@core/components/organisms/Card';
import NavBar from '@core/components/organisms/NavBar';
import { useStyles } from '@core/lib/styles';
import { Box, Fab } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LifeNavPage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Page header={<NavBar title="人生設計ナビ" />}>
      {categories.map((v, i) => (
        <Box key={i} marginBottom="1em">
          <Card
            title={v.title}
            contents={v.contents}
            buttonText="詳しく相談"
            onClick={() => navigate(`/life-nav-detail/${v.id}`)}
          />
        </Box>
      ))}
      <Fab
        // href="/message"
        color="primary"
        aria-label="message"
        className={classes.fab}
      >
        <CommentIcon />
      </Fab>
    </Page>
  );
};

export default LifeNavPage;
