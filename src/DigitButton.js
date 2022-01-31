import { ACTIONS } from "./App";

export default function DigitButton(
  /*destructure the props*/ { dispatch, digit }
) {
  return (
    <button
      onClick={() =>
        dispatch(
          /*object passed into dispatch function*/ {
            type: ACTIONS.ADD_DIGIT,
            payload: { digit },
          }
        )
      }
    >
      {digit}
    </button>
  );
}
