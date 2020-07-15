import { ADD_TO_FAVORITE, REMOVE_ARTIST } from "./action-types/constants";

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
    type: REMOVE_ARTIST,
    id,
  };
};
