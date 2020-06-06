import Page from '@core/components/atoms/Page';
import Card from '@core/components/organisms/Card';
import NavBar from '@core/components/organisms/NavBar';
import { Box } from '@material-ui/core';
import React from 'react';

const ConsultingListsPage: React.FunctionComponent = () => {
  return (
    <Page header={<NavBar title="人生ナビ" />}>
      {answers.map((v, i) => (
        <Box key={i} marginBottom="1em">
          <Card
            title={v.title}
            contents={v.contents}
            buttonText="内容を見る"
            onClick={() => {}}
          />
        </Box>
      ))}
    </Page>
  );
};

const answers = [
  {
    title: '支出を最適化',
    contents: ['月々の支払額を管理したい'],
  },
];

export default ConsultingListsPage;
