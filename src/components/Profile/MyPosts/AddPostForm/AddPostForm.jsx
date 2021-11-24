/* eslint-disable */
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddPostForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component="textarea" name="postText" />
      </div>
      <div>
        <button>add message</button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({
  form: 'addPost',
})(AddPostForm);

export default AddPostReduxForm;
