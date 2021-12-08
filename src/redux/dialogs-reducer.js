const UPDATE_MESSAGE_BODY = "UPDATE-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state=initialState, action) => {
  //stateCopy.messages = [...state.dialogs] (так записывается в две строчки)

  switch (action.type) {
    case UPDATE_MESSAGE_BODY: 
       return {
          ...state,
          newMessageBody: action.body,
        };
    case SEND_MESSAGE: 
        let body = state.newMessageBody;
       return {
          ...state,
          messages: [...state.messages, { id: 6, message: body }], //вместо stateCopy.messages.push({ id: 6, message: body });
          newMessageBody: "",
          };
    default:
        return state;
  }
  
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => {
  //props.addPost;
  return {
    type: UPDATE_MESSAGE_BODY,
    body: body,
  };
};

export default dialogsReducer;
