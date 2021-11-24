/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {
  getProfileTC, setUserProfile,
  getUserStatusTC, putUserStatusTC
} from '../../redux/profileReducer';
import { withRouter } from 'react-router';
import withAuthComponent from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    this.props.getProfileTC(userId);
    this.props.getUserStatusTC(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = ({ profilePage }) => ({
  profile: profilePage.profile,
  status: profilePage.status
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getProfileTC,
    getUserStatusTC,
    putUserStatusTC
  }),
  withAuthComponent,
  withRouter
)(ProfileContainer);
