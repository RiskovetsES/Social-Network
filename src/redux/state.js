import profileReducer from './profileReducer';

const store = {
  state: {
    profilePage: {
      posts: [
        { id: 1, post: 'post1' },
        { id: 2, post: 'post2' },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Ivan' },
        { id: 2, name: 'name2' },
        { id: 3, name: 'name3' },
      ],
      messages: [
        { id: 1, message: 'message1' },
        { id: 2, message: 'message2' },
        { id: 3, message: 'message3' },
      ],
    },
  },

  getState() {
    return this.state;
  },

  callSubscriber() {
    console.log('render');
  },

  subscribe(observer) {
    this.callSubscriber = observer;
  },

  dispatch(action) {
    this.state.profilePage = profileReducer(this.state.profilePage, action);
    this.callSubscriber(this);
  },
};
allallexport default store;
