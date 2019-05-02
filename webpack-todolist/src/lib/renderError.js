import { displayError } from "./index";

export default function renderError(state) {
  if (state.error === true) {
    displayError("block");
  }
}
