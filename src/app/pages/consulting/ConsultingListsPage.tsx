import Page from '@core/components/atoms/Page';
import Card from '@core/components/organisms/Card';
import NavBar from '@core/components/organisms/NavBar';
import { Box } from '@material-ui/core';
import { DateTime } from 'luxon';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConsultingListsPage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Page header={<NavBar title="相談一覧" />}>
      {items.map((v, i) => (
        <Box key={i} marginBottom="1em">
          <Card
            title={v.title}
            subheader={DateTime.fromISO(v.createdAt).toFormat('yyyy/MM/dd')}
            contents={v.contents}
            buttonText="内容を見る"
            onClick={() => navigate(`/advice`)}
          />
        </Box>
      ))}
    </Page>
  );
};

const items = [
  {
    title: '支出を最適化',
    contents: '月々の支払額を管理したい',
    createdAt: '2020-05-17T23:02:50.665+09:00',
  },
];

export default ConsultingListsPage;
