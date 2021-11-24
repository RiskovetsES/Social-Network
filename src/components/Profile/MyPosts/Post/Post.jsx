/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const Post = React.memo(({ message }) => {
  console.log('render Post');
  return (
    <div>
      {message}
    </div>
  );
})

Post.propTypes = {
  message: PropTypes.string.isRequired,
};
// function Post({ message }) {
//   console.log('render Post');
//   return (
//     <div>
//       {message}
//     </div>
//   );
// }

// Post.propTypes = {
//   message: PropTypes.string.isRequired,
// };


export default Post;
