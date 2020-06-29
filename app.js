/********* -Caching DOM- **********/

/*Regular Variables*/
let userScore = 0;
let computerScore = 0;

/*DOM Variables*/
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

/********* -Functions- **********/
/** Computer Choice */
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

/**Convert choice to word */
const convertToWord = (letter) => {
  if (letter == 'r') return 'Rock';
  if (letter == 'p') return 'Paper';
  return 'Scissors';
};

/**Change font size */

const smallWord = (word) => {
  return word.fontsize(3).sub();
};

/**Win function */
const win = (userChoice, computerChoice) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = ` [${convertToWord(userChoice)}] ${smallWord(
    'User'
  )} beats [${convertToWord(computerChoice)}]${smallWord(
    'Computer'
  )}. You Win!!🔥🔥`;

  let userChoice_ID = document.getElementById(userChoice);
  let computerChoice_ID = document.getElementById(computerChoice);

  userChoice_ID.classList.add('green-glow');
  setTimeout(() => userChoice_ID.classList.remove('green-glow'), 700);

  computerChoice_ID.classList.add('red-glow');
  setTimeout(() => computerChoice_ID.classList.remove('red-glow'), 700);
};

/**Lose function */
const lose = (userChoice, computerChoice) => {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `[${convertToWord(computerChoice)}]${smallWord(
    'Computer'
  )} beats [${convertToWord(userChoice)}]${smallWord('User')}. You Lose!!😢😢`;

  let userChoice_ID = document.getElementById(userChoice);
  let computerChoice_ID = document.getElementById(computerChoice);

  userChoice_ID.classList.add('red-glow');
  setTimeout(() => userChoice_ID.classList.remove('red-glow'), 700);

  computerChoice_ID.classList.add('green-glow');
  setTimeout(() => computerChoice_ID.classList.remove('green-glow'), 700);
};

/**Draw function */
const draw = (userChoice, computerChoice) => {
  result_p.innerHTML = `[${convertToWord(userChoice)}]${smallWord('User ')} = [
  ${convertToWord(computerChoice)}]${smallWord('Computer')}. It' a draw!!🤝🤝`;

  let userChoice_ID = document.getElementById(userChoice);
  let computerChoice_ID = document.getElementById(computerChoice);

  userChoice_ID.classList.add('yellow-glow');
  setTimeout(() => userChoice_ID.classList.remove('yellow-glow'), 700);

  computerChoice_ID.classList.add('yellow-glow');
  setTimeout(() => computerChoice_ID.classList.remove('yellow-glow'), 700);
};

/**Run game */
function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
  }
}

/**Main function */
function main() {
  /********* -Events- **********/
  rock_div.addEventListener('click', () => game('r'));
  paper_div.addEventListener('click', () => game('p'));
  scissors_div.addEventListener('click', () => game('s'));
}

main();
