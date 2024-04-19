import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART,SELECT_HEADER_ITEM } from "./constant";

export const cartData = (data = [], action) => {

  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      const updatedData = data.filter((item) => item !== action.data);
      return [...updatedData];

    case EMPTY_CART:
      return [];


    case SELECT_HEADER_ITEM:
      return {
        ...data,
        selectedHeaderItems: [...data.selectedHeaderItems, action.payload],
      };

    default:
      return data;
  }
};

