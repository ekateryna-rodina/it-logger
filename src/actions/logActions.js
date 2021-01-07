import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from "./types";

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
  console.log(log);
  try {
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
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

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};