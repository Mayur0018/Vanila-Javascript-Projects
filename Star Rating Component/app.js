const stars = document.querySelectorAll(".fa-star-o");
const selectedValue = document.querySelector(".selected-rating-value")
let currentTotalSelectedStar = -1; // Fixed typo here

stars.forEach((starsItem, index) => {
  starsItem.dataset.rating = index + 1;
  starsItem.addEventListener("mouseover", handleMouseOver);
  starsItem.addEventListener("click", handleOnClick);
  starsItem.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseOver(event) {
  let currentRatingValue = event.target.dataset.rating;
  if (!currentRatingValue) return;
  else handleUpadte(currentRatingValue);
}

function handleUpadte(getCurrentRatingValue) {
  for (let i = 0; i < 5; i++) {
    if (i < getCurrentRatingValue) {
      stars[i].classList.replace("fa-star-o", "fa-star");
    } else {
      stars[i].classList.replace("fa-star", "fa-star-o");
    }
  }
}

function handleOnClick(event) {
  const currentRatingValue = event.target.dataset.rating;
  currentTotalSelectedStar = currentRatingValue;
  handleUpadte(currentTotalSelectedStar);
  selectedValue.textContent= currentTotalSelectedStar;
}
function handleMouseLeave(){
    handleUpdateRatingState(currentTotalSelectedStar)
  }
