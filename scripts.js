const containerDiv = document.querySelector(".container");

for (let i = 0; i < (16 * 16); i++) {
  const childDiv = document.createElement("div");
  childDiv.textContent = "div";
  containerDiv.append(childDiv);
}
