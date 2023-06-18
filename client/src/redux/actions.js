export const GET_PROJECT_BY_ID = "GET_PROJECT_BY_ID";

export const getProjectById = (id) => {
  return async (dispatch) => {
    return dispatch({ type: GET_PROJECT_BY_ID, payload: id });
  };
};
