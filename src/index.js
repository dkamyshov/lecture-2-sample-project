import { createStore } from "redux";
import mireaLogoImage from "./mirea.png";

mireaLogo.src = mireaLogoImage;

const counterElement = document.getElementById("counter-value");
const counterIncButton = document.getElementById("counter-inc");
const counterDecButton = document.getElementById("counter-dec");

/**
 * Состояние приложения (в данном случае - значение счетчика).
 *
 * @deprecated
 */
let counter = 0;

/**
 * Редьюсер для нашего приложения
 *
 * @param {number} state текущее значение счетчика
 * @param {*} action действие
 */
const reduxReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return state + 1;
    }

    case "DECREMENT": {
      return state - 1;
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
 * Обновит состояние счетчика
 *
 * @param {number} delta
 * @deprecated
 */
const update = delta => {
  counter += delta;
};

/**
 * Выполнит обработку пользовательского ввода.
 *
 * @param {number} delta
 * @deprecated
 */
const processInput = delta => {
  update(delta);
  render();
};

counterIncButton.addEventListener("click", () => {
  reduxStore.dispatch({
    type: "INCREMENT"
  });
});

counterDecButton.addEventListener("click", () => {
  reduxStore.dispatch({
    type: "DECREMENT"
  });
});
