import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_SEARCH,
  CLEAR_SEARCH,
} from "./types";

// get logs
export const getLogs = () => async (dispatch) => {
  setLoading();

  try {
    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data.error,
    });
  }
};

// add new log
export const addLog = (log) => async (dispatch) => {
  setLoading();

  try {
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data.error,
    });
  }
};

// delete log
export const deleteLog = (id) => async (dispatch) => {
  setLoading();
  try {
    await fetch(`/logs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data.error,
    });
  }
};

// add new log
export const editLog = (log) => async (dispatch) => {
  setLoading();
  const { id, message, tech, attention } = log;
  try {
    const res = await fetch(`/logs/${id}`, {
      method: "PUT",
      body: JSON.stringify({ message, tech, attention }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data.error,
    });
  }
};

// set search
export const searchLogs = (text) => async (dispatch) => {
  setLoading();

  try {
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SET_SEARCH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data.error,
    });
  }
};

// clear search
export const clearSearch = () => async (dispatch) => {
  setLoading();

  try {
    const res = await fetch("/logs");

    const data = await res.json();

    dispatch({
      type: CLEAR_SEARCH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data.error,
    });
  }
};

// set current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

// clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
