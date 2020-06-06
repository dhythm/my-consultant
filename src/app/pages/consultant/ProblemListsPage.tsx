import Page from '@core/components/atoms/Page';
import Card from '@core/components/organisms/Card';
import NavBar from '@core/components/organisms/NavBar';
import { Box } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProblemListsPage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Page header={<NavBar title="相談一覧" />}>
      {items.map((v, i) => (
        <Box key={i} marginBottom="1em">
          <Card
            title={v.title}
            contents={v.contents}
            buttonText="提案を追加する"
            onClick={() => navigate(`/add-advice`)}
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
  },
];

export default ProblemListsPage;
