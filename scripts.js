const containerDiv = document.querySelector(".container");

const createGrid = function (size = 16) {
  const clearContainer = function () {
    while (containerDiv.firstChild) {
      containerDiv.removeChild(containerDiv.firstChild);
    }
  }
  clearContainer();

  const createGridTemplate = function () {
    containerDiv.style.gridTemplateColumns = `repeat(${size},1fr)`;
    containerDiv.style.gridTemplateRows = `repeat(${size},1fr)`
  }
  createGridTemplate();

  const fillGrid = function () {
    for (let i = 0; i < size * size; i++) {
      const childDiv = document.createElement("div");
      childDiv.classList.add("child-div");
      containerDiv.append(childDiv);
    }
  }
  fillGrid();

  const makeInteractive = function () {
    const childDivNodeList = document.querySelectorAll(".child-div");
  
    childDivNodeList.forEach((childDiv) => {
      childDiv.addEventListener("pointerenter", () => {
        const redValue = Math.random() * 255;
        const greenValue = Math.random() * 255;
        const blueValue = Math.random () * 255;

        childDiv.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
      });
      childDiv.addEventListener("pointerout", () => {
        setTimeout(function () {
          childDiv.style.backgroundColor = "lightgrey";
        }, 2000);
      });
    });
  }
  makeInteractive();
}

createGrid();

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
  } else if (Number(sizePrompt) > 320) {
    alert("The number you chose was too big to draw. Please pick something between 1 and 320.");
    return;
  } else {
    createGrid(Number(sizePrompt));
  }
});
