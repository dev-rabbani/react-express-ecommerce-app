//actions

import axios from "axios";
import { FETCH_ERRORS, FETCH_SUCCESS } from "./postTypes";

const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};
const fetchErrors = (errors) => {
  return {
    type: FETCH_ERRORS,
    payload: errors,
  };
};

const postApi = `https://jsonplaceholder.typicode.com/posts`;
const fetchPosts = () => {
  return function (dispatch) {
    axios
      .get(postApi)
      .then((res) => dispatch(fetchSuccess(res.data.slice(0, 10))))
      .catch((errors) => dispatch(fetchErrors(errors)));
  };
};

export default fetchPosts;
