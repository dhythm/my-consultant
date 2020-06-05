import TextField from '@material-ui/core/TextField';
import { useFormikContext } from 'formik';
import React from 'react';

interface Props {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  rows?: number;
}

const TextInput: React.FunctionComponent<Props> = ({
  id,
  label,
  placeholder,
  type,
  rows,
}) => {
  const { values, errors, touched, handleChange } = useFormikContext<any>();

  return (
    <TextField
      id={id}
      name={id}
      label={(touched[id] && errors[id]) || label}
      placeholder={placeholder}
      type={type || 'text'}
      onChange={handleChange}
      value={values[id]}
      error={touched[id] && !!errors[id]}
      style={{ marginBottom: 8 }}
      fullWidth
      multiline={!!rows}
      rows={rows}
    />
  );
};

export default TextInput;
