import { useToasts } from "react-toast-notifications";

export default function useValidate(name, email, message, subject) {
    const { addToast } = useToasts();
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