import Page from '@core/components/atoms/Page';
import TextInput from '@core/components/atoms/TextInput';
import NavBar from '@core/components/organisms/NavBar';
import { Box, Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddAdvicePage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Page header={<NavBar title="アドバイスの追加" />}>
      <Formik initialValues={{}} onSubmit={() => navigate(-1)}>
        <Form>
          <Box paddingBottom="1em">
            <TextInput
              id="advice"
              label="アドバイス"
              placeholder="アドバイスを記入してください"
              rows={10}
            />
          </Box>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            提案する
          </Button>
        </Form>
      </Formik>
    </Page>
  );
};

export default AddAdvicePage;
