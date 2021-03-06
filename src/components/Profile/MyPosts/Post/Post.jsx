import classes from "./Post.module.css";
import React from 'react'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://cs6.pikabu.ru/avatars/1121/x1121129-2144512139.png"></img>
      {props.message}
      <div>
        <span>Like {props.countLikes}</span>
      </div>
    </div>
  );
};

export default Post;
