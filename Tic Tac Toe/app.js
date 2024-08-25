const board = document.querySelector(".board");
const square = document.querySelectorAll(".square");
const message = document.querySelector(".message");

const Players = ["X", "O"];

let cuurentPlayer = Players[0];
message.textContent = `X's Turn`;
let WiningCoditions = [
  [0, 1, 3],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 3, 8],
  [2, 4, 6],
];

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function () {
    if (square[i].textContent !== "") {
      return;
    }
    
    if (checkWiner(cuurentPlayer)) {
      message.textContent = `Game Over. ${cuurentPlayer}`;
    }

    square[i].textContent = cuurentPlayer;

    cuurentPlayer = cuurentPlayer === Players[0] ? Players[1] : Players[0];

    if (cuurentPlayer === Players[0]) {
      message.textContent = `X's Turn `;
    } else {
      message.textContent = `O's Turn `;
    }
  });
}

function checkWiner() {
  for (i = 0; i < WiningCoditions.length; i++) {
    const [a, b, c] = WiningCoditions[i];
    if (
      square[a].textContent === cuurentPlayer &&
      square[b].textContent === cuurentPlayer &&
      square[c].textContent === cuurentPlayer
    ) {
      return true;
    }
    return false;
  }
}
