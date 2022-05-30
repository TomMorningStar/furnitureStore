const initialState = {
  sofas: [],
  error: null,
};

const sofas = (state = initialState, action) => {
  switch (action.type) {
    case "get/sofa/pending":
      return {
        ...state,
        loadingArmchairs: true,
        error: null,
      };
    case "get/sofa/fulfilled":
      return {
        ...state,
        loadingArmchairs: false,
        sofas: [...action.payload],
      };
    case "get/sofa/rejected":
      return {
        ...state,
        loadingArmchairs: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export const getSofas = () => {
  return async (dispatch) => {
    dispatch({ type: "get/sofa/pending" });

    try {
      const res = await fetch("http://localhost:4000/sofa");
      const sofa = await res.json();

      dispatch({ type: "get/sofa/fulfilled", payload: sofa });
    } catch (error) {
      dispatch({ type: "get/sofa/rejected", error: "ошибка" });
    }
  };
};

export default sofas;
