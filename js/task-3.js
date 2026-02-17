const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

inputElement.addEventListener("input", event => {
  const normalizedName = event.currentTarget.value.trim();
  outputElement.textContent = normalizedName || "Anonymous";
});
