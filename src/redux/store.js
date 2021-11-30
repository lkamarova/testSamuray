const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
    _state: {
        profilePage: { 
            posts: [
                {id: 1, message: "Hi! How a you?", likesCount: 12},
                {id: 2, message: "I am very happy!", likesCount: 15},
                {id: 3, message: "My name Liliya", likesCount: 23},
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
        }    
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

    dispatch(action) { // {type: "ADD-POST"}
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount:0,
            }
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ( { type: ADD_POST } );
  
export const updateNewPostActionCreator = (text) => {
    //props.addPost;
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text,
    }
  };

export default store;