let wordTxt = document.querySelector(".word-text");
let hintTxt = document.querySelector(".hint span");
let timeTxt = document.querySelector(".time b");
let refreshBtn = document.querySelector(".refresh-word");
let checkBtn = document.querySelector(".check-word");
let inputField = document.querySelector("input");

let correctWord, timer;

const initTimer = (maxtime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxtime > 0) {
      maxtime--;
      return (timeTxt.innerText = maxtime);
    }
    clearInterval(timer);
    alert("Time Out");
    initGame();
  }, 1000);
};
const initGame = () => {
  initTimer(30);
  let randomObj = words[Math.floor(Math.random() * words.length)]; //getting random objects from word
  let wordARR = randomObj.word.split(""); // splitting each word into array of letters.
  for (let i = wordARR.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordARR[i], wordARR[j]] = [wordARR[j], wordARR[i]]; //shuffling letters
  }
  wordTxt.innerText = wordARR.join("");
  inputField.value = "";
  hintTxt.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
};
initGame();

let check = () => {
  let inputTxt = inputField.value.toLowerCase();
  if (!inputTxt) {
    return alert("Enter a valid word");
  }
  if (inputTxt == correctWord) {
    alert("you are right");
    initGame();
  } else {
    return alert("try again");
  }
};

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", check);
