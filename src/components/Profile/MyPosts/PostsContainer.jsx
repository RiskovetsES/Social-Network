import { connect } from 'react-redux';
import { compose } from 'redux';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import withAuthComponent from '../../../HOC/withAuthRedirect';

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (text) => {
    dispatch(addPostActionCreator(text));
  },
  onPostChange: (text) => {
    dispatch(updateNewPostTextActionCreator(text));
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthComponent,
)(MyPosts);
