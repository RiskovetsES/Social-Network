/* eslint-disable */
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addMessageActionCreator = (text) => ({
  type: ADD_MESSAGE,text
});
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text,
});

const initialState = {
  dialogs: [
    { id: 1, name: 'name1' },
    { id: 2, name: 'name2' },
    { id: 3, name: 'name3' },
  ],
  messages: [
    { id: 1, message: 'message1' },
    { id: 2, message: 'message2' },
    { id: 3, message: 'message3' },
  ],
  newMessageText: '',
};


const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
    const newMessage = {
      id: 3, message: action.text,
    }
    return {
      ...state,
      messages: [...state.messages, newMessage],
    }
    case UPDATE_NEW_MESSAGE_TEXT:
    return {
      ...state,
      newMessageText: action.text,
    }
    default: return state
  }
};

export default dialogsReducer;
