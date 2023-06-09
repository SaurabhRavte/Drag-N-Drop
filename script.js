let lists = document.querySelectorAll(".list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let button = document.getElementById("button");
let successMessage = document.getElementById("successMessage");

lists.forEach((list) => {
  list.addEventListener("dragstart", () => {
    list.classList.add("dragging");
  });
  list.addEventListener("dragend", () => {
    list.classList.remove("dragging");
  });
});

rightBox.addEventListener("dragover", (e) => {
  e.preventDefault();
});
rightBox.addEventListener("dragenter", (e) => {
  e.preventDefault();
  rightBox.classList.add("drag-over");
});
rightBox.addEventListener("dragleave", () => {
  rightBox.classList.add("drag-over");
});
rightBox.addEventListener("drop", () => {
  const list = document.querySelector(".dragging");
  rightBox.appendChild(list);
  rightBox.classList.remove("drag-over");
  successMessage.textContent = "Item dropped successfully";
});

button.addEventListener("click", () => {
  rightBox.innerHTML = "";
  successMessage.textContent = "";
  lists.forEach((list) => {
    list.classList.remove("dragging");
    document.getElementById("left").appendChild(list);
  });
});
