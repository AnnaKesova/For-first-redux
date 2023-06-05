import { DOGS_LOAD } from "./types";

const initialState = {
  src: "",
};

export const dogsReducer = (state = initialState, action) => {
  console.log("input text Reducer >", action);
  switch (action.type) {
    case DOGS_LOAD:
      return {
        ...state,
        src: action.data.message,
      };

    default:
      return state;
  }
};
