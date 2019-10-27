import { createStore } from "redux";
import mireaLogoImage from "./mirea.png";

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
const reduxStore = createStore(reduxReducer);

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
 * Задиспатчит 2 действия "вручную".
 *
 * @param {number} delta
 */
const modifyTwice = delta => {
  reduxStore.dispatch(modify(delta));

  setTimeout(() => {
    reduxStore.dispatch(modify(delta));
  }, 100);
};

counterIncButton.addEventListener("click", () => {
  modifyTwice(1);
});

counterDecButton.addEventListener("click", () => {
  modifyTwice(-1);
});
