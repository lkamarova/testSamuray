const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
      { id: 1, message: "Hi! How a you?", likesCount: 12 },
      { id: 2, message: "I am very happy!", likesCount: 15 },
      { id: 3, message: "My name Liliya", likesCount: 23 },
    ],
    newPostText: "Text",
  }

/*example:
let sum(a,b) = a+b;
if a not =>
a=0
sum(a=0, b=0);
set initial value;
*/

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
              ...state,
              posts: [...state.posts, newPost],
              newPostText: "",
            };
        }       
        case UPDATE_NEW_POST_TEXT:{
            return {
              ...state,
              newPostText: action.newText,
            }
        }
        default: return state;  
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text) => {
  //props.addPost;
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;