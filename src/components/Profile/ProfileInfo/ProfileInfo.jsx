/* eslint-disable */
import React from 'react';
import avatar from '../../../assets/images/avatar.png';
import Preloader from '../../preloader/Preloader';
import ProfileStatusHooks from './ProfileStatus/ProfileStatusHooks';

const ProfileInfo = ({ profile, status, putUserStatusTC }) => {
  if (!profile) {
    return <Preloader />
  }
  const { photos, fullName, } = profile;
  return (
    <>
      <div>
        <img src={photos.large ? photos.large : avatar} classNamewidth={150} height={150} alt="avatar" />
      </div>
      <div>
        <ProfileStatusHooks status={status} putStatus={putUserStatusTC} />
        <p>name: {fullName}</p>
      </div>
    </>
  );
};

export default ProfileInfo;
