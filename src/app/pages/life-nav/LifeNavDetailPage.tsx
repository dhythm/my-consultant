import Page from '@core/components/atoms/Page';
import TextInput from '@core/components/atoms/TextInput';
import Checkbox from '@core/components/molecules/Checkbox';
import NavBar from '@core/components/organisms/NavBar';
import { Box, Button, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';

const LifeNavDetailPage: React.FunctionComponent = () => {
  return (
    <Page header={<NavBar title="人生ナビ" />}>
      <Formik
        initialValues={{ consultation: '', checked: false }}
        onSubmit={() => {}}>
        {formikProps => {
          const { values, setFieldValue } = formikProps;
          return (
            <Form>
              <Box paddingY="0.5em">
                <Typography variant="h6">家計の健康診断</Typography>
              </Box>
              <Box paddingBottom="1em">
                <TextInput
                  id="consultation"
                  label="ご相談内容"
                  placeholder="ご相談内容をご記入ください"
                  rows={10}
                />
              </Box>

              <Box display="flex" flexDirection="column" paddingBottom="1em">
                {[
                  'ご提供頂いた個人情報の取り扱いに関してはプライバシーポリシーをご確認ください。',
                  'ご確認後｢プライバシーポリシーを確認した｣をチェックしてください。',
                ].map((v, i) => (
                  <Typography key={i} align="left" variant="caption">
                    {v}
                  </Typography>
                ))}
              </Box>

              <Box style={{ textAlign: 'center' }} paddingBottom="1em">
                <Checkbox
                  label="プライバシーポリシーを確認した"
                  checked={values.checked}
                  onChange={() => setFieldValue('checked', !values.checked)}
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth>
                送信
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Page>
  );
};

export default LifeNavDetailPage;