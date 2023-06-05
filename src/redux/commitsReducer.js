import {
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD,
} from "./types";

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  console.log("comments Reducer >", action);

  switch (action.type) {

    case COMMENT_CREATE:
      return {
          ...state,
          comments: [...state.comments, action.data]
      }

    case COMMENTS_LOAD:
      const commentsNew = action.data.map((res) => {
        return {
          text: res.body,
          id: res.id,
        };
      });
      return {
        ...state,
        comments: commentsNew,
      };

    default:
      return state;
  }
};
