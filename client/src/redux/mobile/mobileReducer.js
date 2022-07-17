import { BUY_MOBILE } from "./mobileTypes";

//initailState
const initailState = {
  totalMobile: 200,
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case BUY_MOBILE: {
      return {
        ...state,
        totalMobile: state.totalMobile - 1,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
