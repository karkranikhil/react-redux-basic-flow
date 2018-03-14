
import { ADD_ARTICLE } from "../constants/action-type";

const articleReducer = (state = [], action) => {
  console.log('reducer add called')
  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default articleReducer;