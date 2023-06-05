import {
    COMMENT_CREATE,
    //COMMENT_UPDATE,
    //COMMENT_DELETE,
    COMMENTS_LOAD,
    DOGS_CREATE, 
    DOGS_LOAD
  } from "./types";

export function commentCreate(text, id) {
    return{
        type: COMMENT_CREATE,
        data: {text, id}
    }
}


export function commentsLoads() {
  return async (dispatch) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=10"
    );
    const jsonData = await response.json();
    dispatch({
      type: COMMENTS_LOAD,
      data: jsonData,
    });
  };
}

export function dogsLoads() {
    return async (dispatch) => {
      const response = await fetch(
        "https://dog.ceo/api/breeds/image/random"
      );
      const jsonData = await response.json();
      dispatch({
        type: DOGS_LOAD,
        data: jsonData,
      });
    };
  }
