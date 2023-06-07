import { combineReducers } from "redux";
import { likesReducer } from "./likeReducer";
import { foxesReducer } from "./foxesReducer";
import { commentsReducer } from "./commitsReducer";

export const rootReducer = combineReducers({
  commentsReducer,
  foxesReducer,
  likesReducer,
});
