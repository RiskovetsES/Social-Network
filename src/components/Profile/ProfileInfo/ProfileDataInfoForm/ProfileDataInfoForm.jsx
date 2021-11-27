/* eslint-disable */
import React from 'react';
import { Button } from '@mui/material';
import { Field, reduxForm } from 'redux-form';
import UserContacts from '../../../UserContacts/UserContacts';

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
          component="input"
        />
      </div>
      <div>
        Looking for a job:
        {' '}
        <Field
          name="lookingForAJob"
          placeholder="job"
          component="input"
          type="checkbox"
        />
      </div>
      <div>
        Looking for a job description:
        <div>
          <Field
            name="lookingForAJobDescription"
            placeholder="who are you according to the horoscope"
            component="textarea"
          />
        </div>
      </div>
      <div>
        My professionals skills:
        <div>
          <Field
            name="skills"
            placeholder="enter professionals skills"
            component="textarea"
          />
        </div>
      </div>
      <div>
        About me:
        <div>
          <Field
            placeholder="write about yourself"
            name="aboutMe"
            component="textarea"
          />
        </div>
        Contacts:
        {' '}
        {Object.entries(contacts)
          .map((values) => (
            <div>
              {values[0]}:
              <Field
                key={values[0]}
                name={`contacts.${values[0]}`}
                component="input"
              />
            </div>
          ))}
      </div>
      <button>Save</button>
    </form>
  );
};

const ProfileDataInfoReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataInfoForm);

export default ProfileDataInfoReduxForm;
