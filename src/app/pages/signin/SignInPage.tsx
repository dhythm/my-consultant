import Page from '@core/components/atoms/Page';
import TextInput from '@core/components/atoms/TextInput';
import NavBar from '@core/components/organisms/NavBar';
import { Box, Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Page header={<NavBar title="ログイン" />}>
      <Formik
        initialValues={{ userId: '', password: '' }}
        onSubmit={() => navigate('/life-nav')}
      >
        <Form>
          <Box paddingBottom="1em">
            <TextInput id="userId" label="お客様番号" />
            <TextInput id="password" label="パスワード" type="password" />
          </Box>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            ログイン
          </Button>
        </Form>
      </Formik>
    </Page>
  );
};

export default SignInPage;
