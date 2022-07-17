import { FETCH_ERRORS, FETCH_SUCCESS, LOADING } from "./postTypes";

// initialStates
const initialStates = {
  isLoading: false,
  posts: [],
  errors: "",
};

const reducer = (state = initialStates, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    }
    case FETCH_ERRORS: {
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
