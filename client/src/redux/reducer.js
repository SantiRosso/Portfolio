import { GET_PROJECT_BY_ID, CLEAN_STATE } from "./actions.js";
import { projects } from "../assets/projects.js";

const initialState = {
  projects: projects,
  project: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT_BY_ID:
      let proyecto = state.projects.filter((e) => e.id == action.payload);
      return {
        ...state,
        project: proyecto,
      };
    case CLEAN_STATE:
      return {
        ...state,
        project: [],
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
