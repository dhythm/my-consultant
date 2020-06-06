import Button from '@core/components/atoms/Button';
import Page from '@core/components/atoms/Page';
import TextInput from '@core/components/atoms/TextInput';
import NavBar from '@core/components/organisms/NavBar';
import { Box } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { Form, Formik } from 'formik';
import { DateTime } from 'luxon';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddClientPage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Page header={<NavBar title="クライアント登録" />}>
      <Formik
        initialValues={{
          lastName: '',
          firstName: '',
          birthDate: DateTime.local().minus({ years: 30 }),
          phone: '',
          email: '',
        }}
        onSubmit={() => navigate(-1)}
      >
        {formikProps => {
          const { values, setFieldValue } = formikProps;

          return (
            <Form>
              <Box paddingBottom="1em">
                <Box display="flex" flexDirection="row">
                  <TextInput id="lastName" label="姓" />
                  <Box paddingX="0.5em" />
                  <TextInput id="firstName" label="名" />
                </Box>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="yyyy-MM-dd"
                  margin="normal"
                  id="birthDate"
                  label="生年月日"
                  value={values.birthDate}
                  onChange={dateTime => setFieldValue('birthDate', dateTime)}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  fullWidth
                />
                <TextInput id="phone" label="電話番号" type="number" />
                <TextInput id="email" label="メールアドレス" type="email" />
              </Box>

              <Button type="submit">登録</Button>
            </Form>
          );
        }}
      </Formik>
    </Page>
  );
};

export default AddClientPage;
