import { ADD_TO_FAVORITE, REMOTE_ARTIST } from "./action-types/constants";

//add cart action
export const addToCart = (id, name) => {
  return {
    type: ADD_TO_FAVORITE,
    id,
    name,
  };
};
//remove item action
export const removeItem = (id) => {
  return {
    type: REMOTE_ARTIST,
    id,
  };
};
