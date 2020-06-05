import Page from '@core/components/atoms/Page';
import Card from '@core/components/organisms/Card';
import NavBar from '@core/components/organisms/NavBar';
import { Box } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LifeNavPage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <Page header={<NavBar title="人生ナビ" />}>
      {navs.map((v, i) => (
        <Box key={i} marginBottom="1em">
          <Card
            title={v.title}
            contents={v.contents}
            onClick={() => navigate('/life-nav-detail')}
          />
        </Box>
      ))}
    </Page>
  );
};

const navs = [
  {
    title: '家計の健康診断',
    contents: ['支出を最適化', '保険の見直し', '日々の節約術'],
  },
  {
    title: '老　後',
    contents: ['年金計算', '老後資産形成', '2,000万円問題'],
  },
  {
    title: '住　宅',
    contents: ['住宅ローン比較', '賃貸派or持ち家派', '土地活用'],
  },
  {
    title: '教　育',
    contents: ['教育費概算', '進路相談', '知育、習い事'],
  },
  {
    title: '相　続',
    contents: ['相続準備', '終活', '遺言、信託活用'],
  },
  {
    title: '運用相談',
    contents: ['最適な運用アドバイス', 'IDECO？ NISA？', '外貨？ 保険'],
  },
  {
    title: 'その他',
    contents: ['専門家の紹介（弁護士、税理士etc…）', '婚活、就活etc…'],
  },
];

export default LifeNavPage;
