export const GET_PROJECT_BY_ID = "GET_PROJECT_BY_ID";
export const CLEAN_STATE = "CLEAN_STATE";

export const getProjectById = (id) => {
  return async (dispatch) => {
    return dispatch({ type: GET_PROJECT_BY_ID, payload: id });
  };
};

export const cleanState = () => {
  return async (dispatch) => {
    return dispatch({ type: CLEAN_STATE });
  };
};
