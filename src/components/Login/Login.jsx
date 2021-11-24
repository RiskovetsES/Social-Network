/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { loginTC, logoutTC } from '../../redux/authReducer';


const LoginForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field component="input" name="email" type="text" placeholder="email" />
    </div>
    <div>
      <Field component="input" name="password" type="password" placeholder="password" />
    </div>
    <div>
      <Field component="input" name="rememberMe" type="checkbox" />
      remember me
    </div>
    <div>
      <button type="submit">Login</button>
    </div>
  </form>
);


const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = ({ loginTC, logoutTC, isAuth }) => {

  if (isAuth) {
    return <Redirect to={'/profile'} />
  }
  const onSubmit = (data) => {
    loginTC(data);
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div >
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { loginTC, logoutTC })(Login);
