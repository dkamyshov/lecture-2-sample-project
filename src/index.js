import mireaLogoImage from "./mirea.png";

mireaLogo.src = mireaLogoImage;

const counterElement = document.getElementById("counter-value");
const counterIncButton = document.getElementById("counter-inc");
const counterDecButton = document.getElementById("counter-dec");

/**
 * Состояние приложения (в данном случае - значение счетчика).
 */
let counter = 0;

/**
 * Отрисует новое значение счетчика.
 */
const render = () => {
  counterElement.innerHTML = String(counter);
};

/**
 * Обновит состояние счетчика
 *
 * @param {number} delta
 */
const update = delta => {
  counter += delta;
};

/**
 * Выполнит обработку пользовательского ввода.
 *
 * @param {number} delta
 */
const processInput = delta => {
  update(delta);
  render();
};

counterIncButton.addEventListener("click", () => {
  processInput(1);
});

counterDecButton.addEventListener("click", () => {
  processInput(-1);
});
