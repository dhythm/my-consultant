import Button from '@core/components/atoms/Button';
import Page from '@core/components/atoms/Page';
import TextInput from '@core/components/atoms/TextInput';
import NavBar from '@core/components/organisms/NavBar';
import { Box } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddAdvicePage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Page header={<NavBar title="提案" />}>
      <Formik initialValues={{}} onSubmit={() => navigate(-1)}>
        <Form>
          <Box paddingBottom="1em">
            <TextInput
              id="advice"
              label="提案"
              placeholder="提案内容を記入してください"
              rows={10}
            />
          </Box>

          <Button type="submit">提案</Button>
        </Form>
      </Formik>
    </Page>
  );
};

export default AddAdvicePage;
