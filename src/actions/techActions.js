import {
  ADD_TECH,
  TECHS_ERROR,
  SET_LOADING,
  GET_TECHS,
  EDIT_TECH,
  DELETE_TECH,
} from "./types";

// add new tech
export const addTech = (tech) => async (dispatch) => {
  setLoading();

  try {
    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response,
    });
  }
};

// get techs
export const getTechs = () => async (dispatch) => {
  setLoading();

  try {
    const res = await fetch("/techs");

    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response,
    });
  }
};

// edit tech
export const editTech = (tech) => async (dispatch) => {
  setLoading();

  try {
    const { id, firstName, lastName } = tech;
    const res = await fetch(`/techs/${id}`, {
      method: "PUT",
      body: JSON.stringify({ firstName, lastName }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    dispatch({
      type: EDIT_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response,
    });
  }
};

// delete tech
export const deleteTech = (id) => async (dispatch) => {
  console.log("del");
  setLoading();
  try {
    await fetch(`/techs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
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
