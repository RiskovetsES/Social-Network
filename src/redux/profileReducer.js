/* eslint-disable */
import API from '../DAL/API';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_USER_STATUS = 'GET_USER_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO'
const SAVE_PROFILE = 'SAVE_PROFILE'

export const addPostAC = (text) => ({
  type: ADD_POST,text
});
export const updateNewPostTextAC = (text) => ({
  type: 'UPDATE-NEW-POST-TEXT',
  text,
});
export const setUserProfileAC = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export const setUserStatusAC = (status) => ({type: GET_USER_STATUS, status});
export const savePhotoAC = (photos) => ({type: SAVE_PHOTO, photos});
export const saveProfileAC = (profile) => ({type: SAVE_PROFILE, profile});

export const getProfileTC = (id) => {
  return async (dispatch) => {
   const resp = await API.getProfile(id);
      dispatch(setUserProfileAC(resp));
  }
}

export const getUserStatusTC = (id) => {
  return async (dispatch) => {
    const { data } = await API.getStatus(id);
      dispatch(setUserStatusAC(data));
  }
}

export const putUserStatusTC = (status) => async (dispatch) => {
  const { data } = await API.updateStatus(status);
    if(data.resultCode === 0) {
      dispatch(setUserStatusAC(status));
    }
}

export const savePhotoTC = (file) => async (dispatch) => {
  const { data } = await API.savePhoto(file);
  if(data.resultCode === 0) {
    dispatch(savePhotoAC(data.data.photos));
  }
}

export const saveProfileTC = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.id;
  const { data } = await API.saveProfile(profile);
  debugger
  if(data.resultCode === 0) {
    dispatch(getProfileTC(userId));
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
    case SAVE_PHOTO:
      return {
        ...state,
        profile: {...state.profile,
        photos: action.photos,
        }
      }
    default:
      return state;
  }
};

export default profileReducer;
