import { combineReducers } from "redux";
//import { likesReducer } from "./likeReducer";
import { dogsReducer } from "./dogsReducer";
import {commentsReducer} from './commitsReducer';
 //import { appReducer } from "./appReducer copy";

export const rootReducer = combineReducers({
  commentsReducer, dogsReducer
})