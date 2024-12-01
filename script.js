let randomNum = Math.floor(Math.random() * 20) + 1;
const message = document.querySelector(".message");
const checkbtn = document.querySelector(".check");
const displyNum = document.querySelector(".number");
const userNum = document.querySelector("input");
const resetes = document.querySelector(".again");
let score = document.querySelector(".label-score");
let highscore = document.querySelector(".label-highscore");
score.textContent = Number(0);
highscore.textContent = Number(0);

function recall() {
  randomNum = Math.floor(Math.random() * 20) + 1;
}

function compareNum() {
  let guessNum = Number(userNum.value);
  if (guessNum === randomNum) {
    message.textContent = "right number";
    document.querySelector("body").style.background = "#60b347";
    displyNum.textContent = randomNum;
    ++score.textContent;
    ++highscore.textContent;
    recall();
  } else if (guessNum > randomNum && guessNum > 0) {
    message.textContent = "Too big";
    if (score.textContent < 1) {
      score.textContent = 0;
    } else {
      --score.textContent;
    }
  } else if (guessNum < randomNum && guessNum > 0) {
    message.textContent = "Too small";
    if (score.textContent < 1) {
      score.textContent = 0;
    } else {
      --score.textContent;
    }
  } else if (guessNum == false) {
    message.textContent = "no number";
  }

  console.log(randomNum);
  console.log(userNum.value);
}

checkbtn.addEventListener("click", (e) => {
  e.preventDefault();
  compareNum();
});

resetes.addEventListener("click", () => {
  location.reload();
});
