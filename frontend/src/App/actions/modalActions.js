import axios from 'axios'
import { MODAL_ISOPEN_REQUEST, MODAL_ISOPEN_SUCCESS, MODAL_ISOPEN_FAIL, MODAL_SETPROJECT_REQUEST, MODAL_SETPROJECT_SUCCESS, MODAL_SETPROJECT_FAIL } from "../constants/modalConstants";

export const modalToggleOpen = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MODAL_ISOPEN_REQUEST });

    const { modalIsOpen } = getState();
    const isOpen = modalIsOpen.isOpen

    console.log(modalIsOpen)
    console.log(`isOpen: ${isOpen}`)

    dispatch({
      type: MODAL_ISOPEN_SUCCESS,
      payload: !isOpen,
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

        console.log(`data from modalSetProject: ${data}`)
        console.log(data)

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