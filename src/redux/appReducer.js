/* eslint-disable */
import { authTC } from './authReducer';
const SET_INITIALIZED = 'SET_INITIALIZED';

export const initializeAC = () => ({type: SET_INITIALIZED})

export const initializeTC = () => {
  return (dispatch) => {
    dispatch(authTC())
    .then(() => dispatch(initializeAC()))
  }
}


const initialState = {
 initialized: false,
};


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
    return {
      ...state,
      initialized: true,
    }
    default: return state
  }
};

export default appReducer;
