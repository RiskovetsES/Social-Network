/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post/Post';
import AddPostForm from './AddPostForm/AddPostForm'

const MyPosts = (props) => {
  console.log('render MyPosts')
  const { posts } = props.profilePage;
  const addPost = ({ postText }) => {
    props.addPost(postText);
  };
  const postsComponents = posts.map((post) => <Post message={post.post} />);
  return (
    <div>
      <AddPostForm onSubmit={addPost} {...props} />
      {postsComponents}
    </div>
  );
}

MyPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    post: PropTypes.string.isRequired,
  })).isRequired,
  addPost: PropTypes.func.isRequired,
  updateNewPostText: PropTypes.func.isRequired,
};

export default MyPosts;
