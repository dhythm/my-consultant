import Page from '@core/components/atoms/Page';
import Card from '@core/components/organisms/Card';
import NavBar from '@core/components/organisms/NavBar';
import React from 'react';

const AdvicePage: React.FunctionComponent = () => {
  return (
    <Page header={<NavBar title="アドバイス" />}>
      <Card
        title="月々の支払額を管理したい"
        contents="Moneyforwardというサービスを使ってみませんか？"
      />
    </Page>
  );
};

export default AdvicePage;
