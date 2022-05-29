const inintialState = {
  items: [],
};

const basket = (state = inintialState, action) => {
  switch (action.type) {
    case "get/basket/pending":
      return {
        ...state,
        loadUser: true,
        error: null,
      };
    case "get/basket/fulfilled":
      return {
        ...state,
        loadUser: false,
        items: action.payload.basket,
        basketInfo: action.payload.basketInfo,
        basketId: action.payload.basketId,
      };
    case "get/basket/rejected":
      return {
        ...state,
        loadUser: false,
        error: action.error,
      };

    //---------------------------------------
    case "post/basket/armchair/pending":
      return {
        ...state,
        loadUser: true,
        error: null,
      };
    case "post/basket/armchair/fulfilled":
      return {
        ...state,
        loadUser: false,
        items: [...state.items, action.payload],
      };
    case "post/basket/armchair/rejected":
      return {
        ...state,
        loadUser: false,
        error: action.error,
      };
    // --------------------------------
    case "pull/basket/armchair/pending":
      return {
        ...state,
        loadUser: true,
        error: null,
      };
    case "pull/basket/armchair/fulfilled":
      return {
        ...state,
        loadUser: false,
        items: [
          ...state.items.filter((item) => item._id !== action.payload._id),
        ],
      };
    case "pull/basket/armchair/rejected":
      return {
        ...state,
        loadUser: false,
        error: action.error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default basket;

export const getBasket = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    dispatch({ type: "get/basket/pending" });
    try {
      const res = await fetch("http://localhost:4000/get/basket", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const basket = await res.json();

      const result = await {
        basketInfo: basket,
        basket: basket.basket,
        basketId: basket._id,
      };

      if (token) {
        dispatch({ type: "get/basket/fulfilled", payload: result });
      }
    } catch (error) {
      dispatch({ type: "get/basket/rejected", error });
    }
  };
};
export const postArmchairToBasket = (idBasket, idProduct) => {
  return async (dispatch, getState) => {
    const state = getState();

    dispatch({ type: "post/basket/armchair/pending" });
    try {
      const res = await fetch(
        `http://localhost:4000/basket/armchair/push/${idBasket}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${state.user.token}`,
          },
          body: JSON.stringify({ id: idProduct }),
        }
      );

      const basketArm = await res.json();

      dispatch({ type: "post/basket/armchair/fulfilled", payload: basketArm });
    } catch (error) {
      dispatch({
        type: "post/basket/armchair/rejected",
        error: error.toString(),
      });
    }
  };
};
export const pullArmchairToBasket = (idBasket, idProduct) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;

    dispatch({ type: "pull/basket/armchair/pending" });
    try {
      const res = await fetch(
        `http://localhost:4000/basket/armchair/pull/${idBasket}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ id: idProduct }),
        }
      );
      const basketArm = await res.json();

      dispatch({ type: "pull/basket/armchair/fulfilled", payload: basketArm });
    } catch (error) {
      dispatch({
        type: "pull/basket/armchair/rejected",
        error: error.toString(),
      });
    }
  };
};
