import { combineReducers } from "redux";

import laptopReducer from "./laptop/laptopReducer";
import mobileLaptop from "./mobile/mobileReducer";
import postReducer from "./post/postReducer";

const rootReducer = combineReducers({
  laptop: laptopReducer,
  mobile: mobileLaptop,
  post: postReducer,
});

export default rootReducer;
