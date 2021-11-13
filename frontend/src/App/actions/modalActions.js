import axios from 'axios'
import { MODAL_ISOPEN_REQUEST, MODAL_ISOPEN_SUCCESS, MODAL_ISOPEN_FAIL, MODAL_SETPROJECT_REQUEST, MODAL_SETPROJECT_SUCCESS, MODAL_SETPROJECT_FAIL } from "../constants/modalConstants";

export const modalToggleOpen = (e) => async (dispatch, getState) => {
  try {
    dispatch({ type: MODAL_ISOPEN_REQUEST });

    // const { modalIsOpen } = getState();
    // const isOpen = modalIsOpen.isOpen

    console.log("EEE")
    console.log(e)

    dispatch({
      type: MODAL_ISOPEN_SUCCESS,
      payload: e,
    });
  } catch (error) {
    dispatch({
      type: MODAL_ISOPEN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const modalSetProject = (id) => async (dispatch) => {
  try {
    if(id === 'close') {
      dispatch({
        type: MODAL_SETPROJECT_SUCCESS,
        payload: ""
      })
    } else {
      dispatch({ type: MODAL_SETPROJECT_REQUEST });

      const { data } = await axios.get(`/api/projects/${id}`);

      dispatch({
          type: MODAL_SETPROJECT_SUCCESS,
          payload: data
      })

    }
  } catch (error) {
    dispatch({
      type: MODAL_SETPROJECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}