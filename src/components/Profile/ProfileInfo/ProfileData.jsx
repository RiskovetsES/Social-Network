/* eslint-disable */
import React, { useState } from 'react';
import avatar from '../../../assets/images/avatar.png';
import Preloader from '../../preloader/Preloader';
import ProfileStatusHooks from './ProfileStatus/ProfileStatusHooks';
import ProfileDataInfo from './ProfileDataInfo/ProfileDataInfo';
import ProfileDataInfoForm from './ProfileDataInfoForm/ProfileDataInfoForm';

const ProfileData = ({isOwner, status, putUserStatusTC, savePhotoTC, saveProfileTC, ...props }) => {
  const [editMode,setEditMode] = useState(false);
  const activateEditMode = () => setEditMode(true);
  const photoSelected = (e) => {
    if (e.target.files.length) {
      savePhotoTC(e.target.files[0]);
    }
  }
  if (!props.profile) {
    return <Preloader />
  }
  const {
    photos
  } = props.profile;
  const onSubmit = (formData) => {
    saveProfileTC(formData);
    setEditMode(false);
  }

  return (
    <>
      <div>
        <img src={photos.large ? photos.large : avatar} width={150} height={150} alt="avatar" />
        {isOwner && <input type={'file'} onChange={photoSelected}/>}
      </div>
        <p>
          Status: <ProfileStatusHooks
          status={status} putStatus={putUserStatusTC} />
        </p>
      {
        editMode ? <ProfileDataInfoForm
            initialValues={props.profile}
            profile={props.profile}
            onSubmit={onSubmit}
          /> :
        <ProfileDataInfo
          profile={props.profile}
          isOwner={isOwner}
          activateEditMode={activateEditMode}
        />
      }
    </>
  );
};

export default ProfileData;
