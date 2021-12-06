import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "./../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElement = state.dialogs.map((el) => (
    <DialogItem name={el.name} key={el.id} id={el.id} />
  ));
  let messagesElements = state.messages.map((el) => (
    <Message id={el.id} key={el.id} message={el.message} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    //e-event;
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialogsElement}</div>
      <div>
        <div className={styles.messages}>
          <div>{messagesElements}</div>
        </div>
        <div className={styles.content}>
          <div>
            <textarea
              value={newMessageBody}
              placeholder="Add your message"
              onChange={onNewMessageChange}
            >
            </textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
