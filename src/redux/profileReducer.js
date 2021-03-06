let ADD_POST = "ADD-POST";
let CHANGE_NEW_POST = "CHANGE-NEW-POST";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        post: state.newPostChange,
        countLikes: 0,
      };
      state.myPostData.push(newPost);
      state.newPostChange = "";
      return state;
    case CHANGE_NEW_POST:
      state.newPostChange = action.newsPost;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const changeNewPostCreator = (post) => ({
  type: CHANGE_NEW_POST,
  newsPost: post,
});

export default profileReducer;
