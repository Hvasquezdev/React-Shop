import { useState } from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addProductToCart = (product) => {
    setState({
      ...state,
      cart: [...state.cart, product],
    });
  };

  return {
    state,
    addProductToCart,
  };
};

export default useInitialState;
