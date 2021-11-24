/* eslint-disable */
import API from '../DAL/API';
const AUTH_USER = 'AUTH_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export const authAC = (data) => ({
  type: AUTH_USER,
  data
});

export const logoutAC = () => ({
  type:LOGOUT_USER,
  data: {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  }
})

export const authTC = () => {
  return async (dispatch) => {
    const {resultCode,data} = await API.getAuthMe();
      if (resultCode === 0) {
         dispatch(authAC(data));
      }
  }
}

export const loginTC = (data) => {
  return async (dispatch) => {
    const {resultCode} = await API.login(data)
    if (resultCode === 0) {
      dispatch(authTC())
    }
  }
}

export const logoutTC = (data) => {
  return async (dispatch) => {
    const {resultCode} = await API.logout()
    if (resultCode === 0) {
      dispatch(logoutAC())
    }
  }
}


const initialState = {
 id: null,
 login: null,
 email: null,
 isAuth: false,
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
    return {
      ...state,
      ...action.data,
      isAuth: true,
    }
    case LOGOUT_USER:
      return {
        ...state,
        ...action.data,
      }
    default: return state
  }
};

export default authReducer;
