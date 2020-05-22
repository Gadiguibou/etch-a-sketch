const containerDiv = document.querySelector(".container");

for (let i = 0; i < (16 * 16); i++) {
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
    setTimeout(function () { childDiv.classList.remove("active-div") }, 2000);
  })
});