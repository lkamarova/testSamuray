import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi! How a you?", likesCount: 12 },
        { id: 2, message: "I am very happy!", likesCount: 15 },
        { id: 3, message: "My name Liliya", likesCount: 23 },
      ],
      newPostText: "Text",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Liliya" },
        { id: 2, name: "Sveta" },
        { id: 3, name: "Liya" },
        { id: 4, name: "Vita" },
        { id: 5, name: "Anya" },
      ],
      messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "How are you!" },
        { id: 3, message: "I am Liliya!" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },

  _callSubscriber() {
    console.log("State change");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // {type: "ADD-POST"}
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
