import API from '../DAL/API';

/* eslint-disable */
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

export const followAC = (id) => ({type: FOLLOW,id});
export const unfollowAC = (id) => ({type: UNFOLLOW,id});
export const setUsersAC = (usersPage) => ({type: SET_USERS,usersPage});
export const setCurrPageAC = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});


export const getUsersTC = (currentPage, pageSize) => {
  return async (dispatch) => {
    const {items,totalCount} = await API.getUsers(currentPage, pageSize);
    dispatch(setUsersAC(items));
    dispatch(setTotalCountAC(totalCount));
  }
}

export const followTC = (id) => {
  return async (dispatch) => {
    const resp = await API.subscribe(id)
      if (resp.resultCode === 0) {
        dispatch(followAC(id));
      }
  }
}

export const unfollowTC = (id) => {
  return async (dispatch) => {
    const resp = await API.unsubscribe(id)
      if (resp.resultCode === 0) {
        dispatch(unfollowAC(id));
      }
  }
}

const initialState = {
  usersPage: [],
  currentPage: 1,
  totalCount: 10,
  pageSize: 10,
  isFetching: false,
};


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
    return {...state, usersPage: [...action.usersPage]}
    case FOLLOW:
    return {
      ...state,
      usersPage: state.usersPage.map(user => {
        if(user.id === action.id) {
          return {...user, followed: true}
        }
        return user;
      })
    }
    case UNFOLLOW:
      return {
        ...state,
        usersPage: state.usersPage.map(user => {
          if(user.id === action.id) {
            return {...user, followed: false}
          }
          return user;
        })
      }
      case SET_CURRENT_PAGE:
        return {
          ...state,
          currentPage: action.page,
        }
      case SET_TOTAL_COUNT:
        return {
          ...state,
          totalCount: action.totalCount,
        }
    default: return state
  }
};

export default usersReducer;
