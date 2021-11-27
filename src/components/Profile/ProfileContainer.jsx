/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import Profile from './Profile';
import {
  getProfileTC, setUserProfileAC,
  getUserStatusTC, putUserStatusTC, savePhotoTC, saveProfileTC,
} from '../../redux/profileReducer';
import withAuthComponent from '../../HOC/withAuthRedirect';

class ProfileContainer extends React.Component {
  // todo: пофиксить баг со статусом
  refreshProfile() {
    let { userId } = this.props.match.params;
    if (!userId) userId = this.props.id;
    this.props.getProfileTC(userId);
    this.props.getUserStatusTC(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
      />
    );
  }
}

const mapStateToProps = ({ profilePage, auth }) => ({
  id: auth.id,
  profile: profilePage.profile,
  status: profilePage.status,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile: setUserProfileAC,
    getProfileTC,
    getUserStatusTC,
    putUserStatusTC,
    savePhotoTC,
    saveProfileTC,
  }),
  withAuthComponent,
  withRouter,
)(ProfileContainer);
