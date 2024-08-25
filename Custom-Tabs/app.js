const BtnContainer = document.querySelector(".container");
const BtnButtons = document.querySelectorAll(".tab-button");
const BtnContent = document.querySelectorAll(".content");

BtnContainer.addEventListener("click", function (event) {
  const selectedId = event.target.dataset.id;

  if (selectedId) {
    BtnButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    event.target.classList.add("active");

    BtnContent.forEach((items) => {
      items.classList.remove("active");
    });
    const containtId = document.getElementById(selectedId);
    containtId.classList.add("active");
  }
});
