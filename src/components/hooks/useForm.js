import {  useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return {value: '', isTouched: false}
  }
  return { value: "", isTouched: false };
};

const useForm = (validateValue) => {
  const [inputState, dipatchInput] = useReducer(inputReducer, initialState);

  /* const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false); */

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    dipatchInput({ type: "INPUT", value: e.target.value });
  };

  const valueInputBlurHandler = () => {
    dipatchInput({ type: "BLUR" });
  };

  const reset = () => {
    dipatchInput({type: "RESET"})
  };

  return {
    hasError,
    enteredValue: inputState.value,
    valueIsValid,
    reset,
    valueInputBlurHandler,
    valueChangeHandler,
  };
};

export default useForm;
