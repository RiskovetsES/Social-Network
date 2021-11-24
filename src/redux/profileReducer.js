/* eslint-disable */
import API from '../DAL/API';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_USER_STATUS = 'GET_USER_STATUS';

export const addPostActionCreator = (text) => ({
  type: ADD_POST,text
});
export const updateNewPostTextActionCreator = (text) => ({
  type: 'UPDATE-NEW-POST-TEXT',
  text,
});
export const setUserProfile= (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export const setUserStatus= (status) => ({type: GET_USER_STATUS, status});

export const getProfileTC = (id) => {
  return async (dispatch) => {
   const resp = await API.getProfile(id);
      dispatch(setUserProfile(resp));
  }
}

export const getUserStatusTC = (id) => {
  return async (dispatch) => {
    const resp = await API.getStatus(id);
      dispatch(setUserStatus(resp.data));
  }
}

export const putUserStatusTC = (status) => async (dispatch) => {
  const resp = await API.updateStatus(status);
    if(resp.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
}

const initialState = {
  posts: [
    { id: 1, post: 'post1' },
    { id: 2, post: 'post2' },
  ],
  newPostText: '',
  profile: null,
  status: 'нет статуса',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 3, post: action.text,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text,
      }
      case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.userProfile,
      }
      case GET_USER_STATUS:
        if(!action.status) return state;
        return {
          ...state,
          status: action.status,
        }
    default:
      return state;
  }
};

export default profileReducer;
