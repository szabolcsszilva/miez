const scoreText = document.querySelector("#score");
const message = document.querySelector("#message");
const clickButton = document.querySelector("#click-button");
const resetButton = document.querySelector("#reset-button");

let score = 0;
const winningScore = 10;

clickButton.addEventListener("click", () => {
  score += 1;
  scoreText.textContent = `Score: ${score} / ${winningScore}`;

  if (score === winningScore) {
    message.textContent = "You win!";
    clickButton.disabled = true;
  }
});

resetButton.addEventListener("click", () => {
  score = 0;
  scoreText.textContent = `Score: 0 / ${winningScore}`;
  message.textContent = "";
  clickButton.disabled = false;
});
