/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import P from './Profile.module.css';
import ProfileData from './ProfileInfo/ProfileData';
import PostsContainer from './MyPosts/PostsContainer';
import { savePhotoTC } from '../../redux/profileReducer';
//todo: добавить загрузку своего профиля
function Profile({...props}) {
  return (
    <div className={P.content}>
      <ProfileData {...props}
      />
      <PostsContainer />
    </div>
  );
}


export default Profile;
