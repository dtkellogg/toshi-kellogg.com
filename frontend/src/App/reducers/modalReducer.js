import { MODAL } from "../actions/modal";

export default function subheader(state = {modal: []}, action) {
  switch (action.type) {
    case MODAL:
      return action.text;
    default:
      return state;
  }
}
