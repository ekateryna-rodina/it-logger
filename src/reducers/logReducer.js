import { act } from "react-dom/test-utils";
import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SET_SEARCH,
  CLEAR_SEARCH,
} from "../actions/types";

const initialState = {
  logs: [],
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [action.payload, ...state.logs],
        loading: false,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((l) => l.id !== action.payload),
        loading: false,
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case SET_SEARCH:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        logs: state.payload,
        loading: false,
      };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
