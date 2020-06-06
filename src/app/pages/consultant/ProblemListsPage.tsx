import Page from '@core/components/atoms/Page';
import Card from '@core/components/organisms/Card';
import CollapsibleList from '@core/components/organisms/CollapsibleList';
import NavBar from '@core/components/organisms/NavBar';
import { Box } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import _ from 'lodash';
import { DateTime } from 'luxon';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProblemListsPage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const groupedItems = _.groupBy(items, 'username');

  return (
    <Page header={<NavBar title="相談一覧" />}>
      {Object.entries(groupedItems).map(([username, problems], idx) => (
        <CollapsibleList
          key={idx}
          label={username}
          icon={<AccountCircleIcon />}
        >
          {(problems as any[]).map((v, i) => (
            <Box key={i} marginBottom="1em">
              <Card
                title={v.title}
                subheader={DateTime.fromISO(v.createdAt).toFormat('yyyy/MM/dd')}
                contents={v.contents}
                buttonText={v.advice ? '提案済' : '提案する'}
                buttonVariant={!v.advice ? 'contained' : undefined}
                onClick={() =>
                  navigate(v.advice ? `/advice/${v.advice.id}` : `/add-advice`)
                }
              />
            </Box>
          ))}
        </CollapsibleList>
      ))}
    </Page>
  );
};

const items = [
  {
    username: '山田 太郎 様',
    title: '支出を最適化',
    contents: '月々の支払額を管理したい',
    advice: null,
    createdAt: '2020-05-17T23:02:50.665+09:00',
  },
  {
    username: '佐藤 花子 様',
    title: '住　宅',
    contents: 'マイホームを購入したい',
    advice: { id: 1, comment: '銀行から低金利でローンを借りる方法があります' },
    createdAt: '2020-05-17T23:02:50.665+09:00',
  },
];

export default ProblemListsPage;
