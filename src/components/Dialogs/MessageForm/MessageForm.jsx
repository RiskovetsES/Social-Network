/* eslint-disable */
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MessageForm.module.scss'



const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    fullWidth
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)


const MessageForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit} >
      <Box mb={2}>
        <Field component={renderTextField} name='messageText' />
      </Box>
      <Box mb={1}>
        <button className={s.btn} type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </Box>
      <Box>
        <button className={s.btn} type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </Box>
    </ form>
  );
}
const MessageReduxForm = reduxForm({
  form: 'message',
})(MessageForm)

export default MessageReduxForm;
