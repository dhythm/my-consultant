import { categories } from '@app/lib/constants';
import Button from '@core/components/atoms/Button';
import Page from '@core/components/atoms/Page';
import Card from '@core/components/organisms/Card';
import Modal from '@core/components/organisms/Modal';
import NavBar from '@core/components/organisms/NavBar';
import { useStyles } from '@core/lib/styles';
import { Box, Fab, Typography } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LifeNavPage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [open, setOpen] = useState(false);

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
        onClick={() => setOpen(true)}
        color="primary"
        aria-label="message"
        className={classes.fab}
      >
        <CommentIcon />
      </Fab>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Typography>担当と直接会話しますか？</Typography>
        <Box display="flex" flexDirection="row" marginTop="0.5em">
          <Button variant="contained" onClick={() => setOpen(false)} fullWidth>
            はい
          </Button>
          <Box paddingX="0.5em" />
          <Button variant="outlined" onClick={() => setOpen(false)}>
            いいえ
          </Button>
        </Box>
      </Modal>
    </Page>
  );
};

export default LifeNavPage;
