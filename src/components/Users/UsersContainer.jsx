import { connect } from 'react-redux';
import withAuthComponent from '../../HOC/withAuthRedirect';
import {
  followAC, setUsersAC, unfollowAC, setCurrPageAC,
  getUsersTC,
  followTC,
  unfollowTC,
} from '../../redux/usersReducer';
import UsersC from './UsersC';

const withRedirect = withAuthComponent(UsersC);

const mapStateToProps = ({
  usersPage, totalCount, pageSize, currentPage, isFetching,
}) => ({
  data: usersPage,
  totalCount,
  pageSize,
  currentPage,
  isFetching,
});

const UsersContainer = connect(mapStateToProps, {
  follow: followAC,
  setUsers: setUsersAC,
  unfollow: unfollowAC,
  setCurrPage: setCurrPageAC,
  getUsersTC,
  followTC,
  unfollowTC,
})(withRedirect);

export default UsersContainer;
