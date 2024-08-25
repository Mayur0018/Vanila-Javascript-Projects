const openModalBtn = document.querySelector(".openModal");
const modalBackground = document.querySelector(".modal-background");
const closeIcon = document.querySelector(".close-icon");
const closeBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", function () {
  modalBackground.style.display = "block";
});

closeIcon.addEventListener("click", function () {
  modalBackground.style.display = "none";
});

closeBtn.addEventListener("click", function () {
  modalBackground.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modalBackground) {
    modalBackground.style.display = "none";
  }
});
