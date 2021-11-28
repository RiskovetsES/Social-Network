/* eslint-disable */
import { Checkbox } from '@mui/material';

const CheckboxComponent = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onChange={input.onChange}
  />
);

export default CheckboxComponent;
