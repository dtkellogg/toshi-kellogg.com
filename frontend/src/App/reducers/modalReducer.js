import {
  MODAL,
  MODAL_ISOPEN_REQUEST,
  MODAL_ISOPEN_SUCCESS,
  MODAL_ISOPEN_FAIL,
} from "../constants/modalConstants";

export function modalCurrentProjectReducer(state = {modal: []}, action) {
  switch (action.type) {
    case MODAL:
      return action.text;
    default:
      return state;
  }
}


export function modalIsOpenReducer(state = {isOpen: false}, action) {
  switch (action.type) {
    case MODAL_ISOPEN_REQUEST:
      return { loading: true, ...state };

    case MODAL_ISOPEN_SUCCESS:
      return { loading: false, isOpen: action.payload };

    case MODAL_ISOPEN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}