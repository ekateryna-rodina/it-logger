import {
  ADD_TECH,
  TECHS_ERROR,
  SET_LOADING,
  GET_TECHS,
  EDIT_TECH,
  DELETE_TECH,
} from "../actions/types";

const initialState = {
  techs: [],
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [action.payload, ...state.techs],
        loading: false,
      };
    case EDIT_TECH:
      return {
        ...state,
        techs: state.techs.map((t) =>
          t.id === action.payload.id ? action.payload : t
        ),
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((t) => t.id !== action.payload),
        loading: false,
      };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
