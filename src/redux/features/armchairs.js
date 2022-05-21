// import axios from "axios";

const initialState = {
  armchairs: [],
  error: null,
};

const armchairs = (state = initialState, action) => {
  switch (action.type) {
    case "get/armchairs/pending":
      return {
        ...state,
        loadingArmchairs: true,
        error: null,
      };
    case "get/armchairs/fulfilled":
      return {
        ...state,
        loadingArmchairs: false,
        armchairs: [...action.payload],
      };
    case "get/armchairs/rejected":
      return {
        ...state,
        loadingArmchairs: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export const getArmchairs = () => {
  return async (dispatch) => {
    dispatch({ type: "get/armchairs/pending" });

    try {
      const res = await fetch("http://localhost:4000/armchairs");
      const armchairs = await res.json();

      dispatch({ type: "get/armchairs/fulfilled", payload: armchairs });
    } catch (error) {
      dispatch({ type: "get/armchairs/rejected", error: "ошибка" });
    }
  };
};

export default armchairs;
