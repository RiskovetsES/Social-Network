/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { authTC, logoutTC } from '../../redux/authReducer';
import Header from './Header';

class HeaderC extends React.Component {
  componentDidMount() {
    this.props.authTC();
  }

  render() {
    return <Header {...this.props} />
  }
}
const mapStateToProps = ({ auth }) => {
  return {
    isAuth: auth.isAuth,
    login: auth.login,
  }
}

export default compose(connect(mapStateToProps, { authTC, logoutTC }))(HeaderC);
