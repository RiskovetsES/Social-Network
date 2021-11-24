/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import P from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './MyPosts/PostsContainer';

function Profile(props) {
  return (
    <div className={P.content}>
      <ProfileInfo {...props} />
      <PostsContainer />
    </div>
  );
}

Profile.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    post: PropTypes.string.isRequired,
  })).isRequired,
};

export default Profile;
