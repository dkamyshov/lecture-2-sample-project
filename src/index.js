import { createStore, applyMiddleware } from "redux";
import mireaLogoImage from "./mirea.png";
import thunk from "redux-thunk";

mireaLogo.src = mireaLogoImage;

const counterElement = document.getElementById("counter-value");
const counterIncButton = document.getElementById("counter-inc");
const counterDecButton = document.getElementById("counter-dec");

/**
 * Редьюсер для нашего приложения
 *
 * @param {number} state текущее значение счетчика
 * @param {*} action действие
 */
const reduxReducer = (state = 0, action) => {
  switch (action.type) {
    case "MODIFY": {
      return state + action.payload.delta;
    }

    default:
      return state;
  }
};

/**
 * Store, в котором будет храниться состояние нашего приложения.
 */
const reduxStore = createStore(reduxReducer, applyMiddleware(thunk));

/**
 * Отрисует новое значение счетчика.
 */
const render = () => {
  const currentValue = reduxStore.getState();
  counterElement.innerHTML = String(currentValue);
};

reduxStore.subscribe(() => {
  render();
});

/**
 * Action creator
 *
 * @param {number} delta
 */
const modify = delta => ({
  type: "MODIFY",
  payload: {
    delta
  }
});

/**
 * Асинхронный modify с помощью redux-thunk.
 *
 * @param {*} delta
 */
const modifyAsync = delta => {
  return dispatch => {
    setTimeout(() => {
      dispatch(modify(delta));
    }, 100);

    return dispatch(modify(delta));
  };
};

counterIncButton.addEventListener("click", () => {
  reduxStore.dispatch(modifyAsync(1));
});

counterDecButton.addEventListener("click", () => {
  reduxStore.dispatch(modifyAsync(-1));
});
