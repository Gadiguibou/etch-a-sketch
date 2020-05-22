const containerDiv = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
  const childDiv = document.createElement("div");
  childDiv.classList.add("child-div");
  containerDiv.append(childDiv);
}

const childDivNodeList = document.querySelectorAll(".child-div");

childDivNodeList.forEach((childDiv) => {
  childDiv.addEventListener("pointerenter", () => {
    childDiv.classList.add("active-div");
  });
  childDiv.addEventListener("pointerout", () => {
    setTimeout(function () {
      childDiv.classList.remove("active-div");
    }, 2000);
  });
});

const resizeBtn = document.querySelector(".resize-button");

resizeBtn.addEventListener("click", function resizeGrid() {
  const sizePrompt = prompt("Enter a new size:");
  if (sizePrompt === null) {
    return;
  } else if (Number(sizePrompt) === NaN) {
    alert("Please enter a valid Number.");
    return;
  } else if (Number(sizePrompt) <= 0) {
    alert("The number you choose must be greater than 0.");
    return;
  } else {
    while (containerDiv.firstChild) {
      containerDiv.removeChild(containerDiv.firstChild);
    }

    containerDiv.style.gridTemplateColumns = `repeat(${Number(
      sizePrompt
    )},1fr)`;
    containerDiv.style.gridTemplateRows = `repeat(${Number(sizePrompt)},1fr)`;

    for (let i = 0; i < Number(sizePrompt) ** 2; i++) {
      const childDiv = document.createElement("div");
      childDiv.classList.add("child-div");
      containerDiv.append(childDiv);
    }
  }
});
