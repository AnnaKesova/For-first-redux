import {
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD,
  FOXES_LOAD,
  INCREMENT,
  DEINCREMENT,
} from "./types";

export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
}

export function incremetLikes() {
  return {
    type: INCREMENT,
  };
}

export function deIncremetLikes() {
  return {
    type: DEINCREMENT,
  };
}

export function commentUpdate(text, id) {
  return {
    type: COMMENT_UPDATE,
    data: { text, id },
  };
}

export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id,
  };
}

export function commentsLoads() {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=4"
      );
      const jsonData = await response.json();
      dispatch({
        type: COMMENTS_LOAD,
        data: jsonData,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function foxesLoads() {
  return async (dispatch) => {
    try {
      const response = await fetch("https://randomfox.ca/floof/");
      const jsonData = await response.json();
      dispatch({
        type: FOXES_LOAD,
        data: jsonData,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
