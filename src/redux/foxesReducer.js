import { FOXES_LOAD } from "./types";

const initialState = {
  src: "",
};

export const foxesReducer = (state = initialState, action) => {
  console.log("input text Reducer >", action);
  switch (action.type) {
    case FOXES_LOAD:
      return {
        ...state,
        src: action.data.image,
      };

    default:
      return state;
  }
};
