/* eslint-disable */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextFieldComponent from '../../../ReduxFormMU/TextFieldComponent';
import CheckboxComponent from '../../../ReduxFormMU/CheckboxComponent';


const validate = values => {
  const validateArr = ['fullName','aboutMe']
  const errors = {}
  validateArr.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
};

const ProfileDataInfoForm = ({ handleSubmit, profile }) => {
  const { contacts } = profile;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:
        {' '}
        <Field
          name="fullName"
          placeholder="fullName"
          component={TextFieldComponent}
          variant="standard"
        />
      </div>
      <div>
        Looking for a job:
        {' '}
        <Field
          name="lookingForAJob"
          component={CheckboxComponent}
          label="lookingForAJob"
        />
      </div>
      <div>
        Looking for a job description:
        <div>
          <Field
            name="lookingForAJobDescription"
            placeholder="who are you according to the horoscope"
            component={TextFieldComponent}
            multiline
            minRows={3}
            variant="filled"
          />
        </div>
      </div>
      <div>
        My professionals skills:
        <div>
          <Field
            name="skills"
            placeholder="enter professionals skills"
            component={TextFieldComponent}
            multiline
            minRows={3}
            variant="filled"
          />
        </div>
      </div>
      <div>
        About me:
        <div>
          <Field
            placeholder="write about yourself"
            name="aboutMe"
            component={TextFieldComponent}
            multiline
            minRows={3}
            variant="filled"
          />
        </div>
        Contacts:
        {' '}
        <ul>
          {Object.entries(contacts)
            .map((values) => (
              <li>
                {values[0]}:
                <Field
                  key={values[0]}
                  name={`contacts.${values[0]}`}
                  component={TextFieldComponent}
                  variant="standard"
                />
              </li>
            ))}
        </ul>
      </div>
      <button>Save</button>
    </form>
  );
};



const ProfileDataInfoReduxForm = reduxForm({ form: 'editProfile',
  validate,
})(ProfileDataInfoForm);

export default ProfileDataInfoReduxForm;
