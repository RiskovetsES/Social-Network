/* eslint-disable */
import React from 'react';
import { Button } from '@mui/material';
import UserContacts from '../../../UserContacts/UserContacts';

const ProfileDataInfo = ({ profile, isOwner, activateEditMode }) => {
  const {
    fullName, aboutMe,
    lookingForAJob,
    lookingForAJobDescription,
    contacts,
  } = profile;
  return (
    <>
      <p>
        Name:
        {fullName}
      </p>
      <p>
        Obout me:
        {aboutMe}
      </p>
      <p>
        Looking for a job:
        {' '}
        {lookingForAJob ? 'yes' : 'no'}
      </p>
      {lookingForAJob && (
      <p>
        My professionals skills:
        {' '}
        {lookingForAJobDescription}
      </p>
      )}
      <div>
        Contacts:
        {' '}
        {Object.entries(contacts).map((values) => {
          if (values[1]) {
            return (
              <UserContacts
                key={values[0]}
                title={values[0]}
                value={values[1]}
              />
            );
          }
          return null;
        })}
      </div>
      {isOwner && <Button onClick={activateEditMode}>Edit profile</Button>}
    </>
  );
};

export default ProfileDataInfo;
