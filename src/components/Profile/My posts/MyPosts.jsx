import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostActionCreator } from "./../../../redux/store";


const MyPosts = (props) => {
  let postsElements = props.posts.map( el => <Post message={el.message} like={el.likesCount} />);

  let addNewPost = React.createRef();

  let addPost = () => {
    props.dispatch( addPostActionCreator() );
  }

  const changeNewPost = () => {
    let text = addNewPost.current.value;
    //let action = {type: "UPDATE-NEW-POST-TEXT", newText: text};
    let action = updateNewPostActionCreator(text);
    props.dispatch( action );
  }

  return (
    <div className={styles.content}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange={ changeNewPost } ref={addNewPost} value={props.newPostText} />
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={styles.postsBlock}>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;