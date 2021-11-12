import { HANDLE_INPUT_TEXT, RESET_INPUTS, TOGGLE_SUBMITTED } from "../constants/formConstants"
import { sendMessage } from "./messageActions";



export const handleTextChange = (e) => async (dispatch) => {
  console.log(`EEE:`)
  console.log(e)
  dispatch({
    type: HANDLE_INPUT_TEXT,
    field: e.target.name,
    payload: e.target.value,
  })

  localStorage.setItem(`${e.target.name}`, `${e.target.value}`)

  localStorage.getItem('name') && localStorage.getItem('email') && localStorage.getItem('subject') && localStorage.getItem('message')
    && localStorage.setItem("readyToSubmit", 'true')
}

export const resetInputs = () => async (dispatch) => {
  dispatch({type: RESET_INPUTS})
}

export const handleSubmit = (name, email, subject, message, addToast) => async (dispatch) => {
  window.setTimeout(() => {
    dispatch({type: TOGGLE_SUBMITTED, payload: false})
  }, 4000);

  const isValid = Validate(name, email, subject, message, addToast);

  if (isValid) {
    dispatch({type: TOGGLE_SUBMITTED, payload: true})

    window.setTimeout(() => {
      dispatch({type: TOGGLE_SUBMITTED, payload: false})
    }, 4000);

    await dispatch(sendMessage(name, email, subject, message))
      .then(() => {
        window.setTimeout(() => {
          addToast("Thank you! Your message has been successfully submitted.", {
            appearance: "success",
            autoDismiss: true,
          }
        );
        localStorage.clear()
        dispatch({type: RESET_INPUTS})
        }, 4000);
      }
      );
  }
}

const Validate = (name, email, subject, message, addToast) => {
  const emailRegexp = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/; // eslint-disable-line no-useless-escape

  if (!emailRegexp.test(email) && message.length === 0 && subject.length === 0 && name.length === 0) {
    addToast("Please fill out all fields.", {
      appearance: "error",
      autoDismiss: true,
    });
  }
  else if (!emailRegexp.test(email) && message.length === 0 && subject.length === 0) {
    addToast("Please submit a subject, message and valid email address.", {
      appearance: "error",
      autoDismiss: true,
    });
  } else if (!emailRegexp.test(email)) {
    addToast("Please submit a valid email address.", {
      appearance: "error",
      autoDismiss: true,
    });
  } else if (message.length === 0 && subject.length === 0) {
    addToast("Please add a message and subject.", {
      appearance: "error",
      autoDismiss: true,
    });
  } else if (message.length === 0) {
    addToast("Please add a message.", {
      appearance: "error",
      autoDismiss: true,
    });
  } else if (subject.length === 0) {
    addToast("Please add a subject.", {
      appearance: "error",
      autoDismiss: true,
    });
  } else {
    return true;
  }
};