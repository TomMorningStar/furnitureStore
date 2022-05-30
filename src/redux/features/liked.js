const inintialState = {
  items: [],
};

const liked = (state = inintialState, action) => {
  switch (action.type) {
    //---------------------------------------
    case "get/liked/pending":
      return {
        ...state,
        loadUser: true,
        error: null,
      };
    case "get/liked/fulfilled":
      return {
        ...state,
        loadUser: false,
        items: action.payload.likedItems,
        likedId: action.payload.likedId,
      };
    case "get/liked/rejected":
      return {
        ...state,
        loadUser: false,
        error: action.error,
      };
    //---------------------------------------
    case "post/liked/armchair/pending":
      return {
        ...state,
        loadUser: true,
        error: null,
      };
    case "post/liked/armchair/fulfilled":
      return {
        ...state,
        loadUser: false,
        items: [...state.items, action.payload],
      };
    case "post/liked/armchair/rejected":
      return {
        ...state,
        loadUser: false,
        error: action.error,
      };
    // --------------------------------
    case "pull/liked/armchair/pending":
      return {
        ...state,
        loadUser: true,
        error: null,
      };
    case "pull/liked/armchair/fulfilled":
      return {
        ...state,
        loadUser: false,
        items: [
          ...state.items.filter((item) => item._id !== action.payload._id),
        ],
      };
    case "pull/liked/armchair/rejected":
      return {
        ...state,
        loadUser: false,
        error: action.error,
      };
    //  --------------------------------
    default:
      return {
        ...state,
      };
  }
};

export default liked;

export const getLiked = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    dispatch({ type: "get/liked/pending" });
    try {
      const res = await fetch("http://localhost:4000/get/liked", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const liked = await res.json();

      const result = await {
        likedItems: liked.likedItems,
        likedId: liked._id,
      };

      if (token) {
        dispatch({ type: "get/liked/fulfilled", payload: result });
      }
    } catch (error) {
      dispatch({ type: "get/liked/rejected", error });
    }
  };
};

// ------------------------------------------------------
export const postArmchairToLiked = (idLiked, idProduct) => {
  return async (dispatch, getState) => {
    const state = getState();

    dispatch({ type: "post/liked/armchair/pending" });
    try {
      const res = await fetch(
        `http://localhost:4000/liked/armchair/push/${idLiked}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${state.user.token}`,
          },
          body: JSON.stringify({ id: idProduct }),
        }
      );

      const likedItem = await res.json();

      dispatch({ type: "post/liked/armchair/fulfilled", payload: likedItem });
    } catch (error) {
      dispatch({
        type: "post/liked/armchair/rejected",
        error: error.toString(),
      });
    }
  };
};
export const pullArmchairToLiked = (idBasket, idProduct) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;

    dispatch({ type: "pull/liked/armchair/pending" });
    try {
      const res = await fetch(
        `http://localhost:4000/liked/armchair/pull/${idBasket}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ id: idProduct }),
        }
      );
      const result = await res.json();

      dispatch({ type: "pull/liked/armchair/fulfilled", payload: result });
    } catch (error) {
      dispatch({
        type: "pull/liked/armchair/rejected",
        error: error.toString(),
      });
    }
  };
};
