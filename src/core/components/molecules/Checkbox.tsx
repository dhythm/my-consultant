import { Checkbox as MuiCheckbox, FormControlLabel } from '@material-ui/core';
import React from 'react';

interface Props {
  label: string;
  checked: boolean;
  onChange: (value) => void;
}

const Checkbox: React.FunctionComponent<Props> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          checked={checked}
          onChange={onChange}
          name="checkbox"
          color="primary"
        />
      }
      label={label}
    />
  );
};

export default Checkbox;
