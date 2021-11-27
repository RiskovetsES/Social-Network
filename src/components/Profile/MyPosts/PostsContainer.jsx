import { connect } from 'react-redux';
import { compose } from 'redux';
import MyPosts from './MyPosts';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer';
import withAuthComponent from '../../../HOC/withAuthRedirect';

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (text) => {
    dispatch(addPostAC(text));
  },
  onPostChange: (text) => {
    dispatch(updateNewPostTextAC(text));
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthComponent,
)(MyPosts);
