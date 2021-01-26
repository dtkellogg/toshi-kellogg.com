import { MODAL_ISOPEN_REQUEST, MODAL_ISOPEN_SUCCESS, MODAL_ISOPEN_FAIL } from "../constants/modalConstants";

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