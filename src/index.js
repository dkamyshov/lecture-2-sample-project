import mireaLogoImage from "./mirea.png";

mireaLogo.src = mireaLogoImage;

const counterElement = document.getElementById("counter-value");
const counterIncButton = document.getElementById("counter-inc");
const counterDecButton = document.getElementById("counter-dec");

/**
 * Состояние приложения (в данном случае - значение счетчика).
 */
let counter = 0;

counterIncButton.addEventListener("click", () => {
  counter++;
  counterElement.innerHTML = String(counter);
});

counterDecButton.addEventListener("click", () => {
  counter--;
  counterElement.innerHTML = String(counter);
});
