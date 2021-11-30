import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let dialogsElement = props.state.dialogs.map( el => <DialogItem name={el.name} id={el.id} /> );   
  let messagesElements = props.state.messages.map( el => <Message id={el.id} message={el.message} /> );
  let addNewMessage = React.createRef();
  let addMessage = () => {
    let text = addNewMessage.current.value;
    alert(text);
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        {dialogsElement}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
      <div className={styles.content}>
        <textarea ref={addNewMessage}>New message</textarea>
      </div>
      <div>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
