import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostActionCreator } from "./../../../redux/profile-reducer";


const MyPosts = (props) => {
  let postsElements = props.posts.map( el => <Post message={el.message} like={el.likesCount} />);
  let addNewPost = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    let text = addNewPost.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={styles.content}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange } ref={addNewPost} value={props.newPostText} />
        </div>
        <div>
          <button onClick={ onAddPost }>Add post</button>
        </div>
      </div>
      <div className={styles.postsBlock}>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
