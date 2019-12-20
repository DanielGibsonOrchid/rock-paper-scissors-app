/***/
/* Declare variables
/***/
// Content wrapper
const wrapperBody = document.getElementById("wrapper-body");

// Rules button variables
const btnRules = document.getElementById("btn-rules");
const btnCloseRules = document.getElementById("btn-close-modal");
const wrapperRulesModal = document.getElementById("wrapper-rules-modal");
const modalOverlay = document.getElementById("wrapper-modal-overlay");
const rulesVariables = [btnRules, btnCloseRules, wrapperRulesModal, modalOverlay];

// Rock, Paper, Scissors Buttons
const btnPaperStep1 = document.getElementById("paper-step-1-btn");
const btnScissorsStep1 = document.getElementById("scissors-step-1-btn");
const btnRockStep1 = document.getElementById("rock-step-1-btn");

// Wrapper div's for buttons
const wrapperStep1 = document.getElementsByClassName("wrapper-rps-btns")[0];
const wrapperStep2 = document.getElementsByClassName("wrapper-step-two")[0];

const wrapperRockStep2 = document.getElementsByClassName("wrapper-rock-icon-2")[0];
const wrapperPaperStep2 = document.getElementsByClassName("wrapper-paper-icon-2")[0];
const wrapperScissorsStep2 = document.getElementsByClassName("wrapper-scissors-icon-2")[0];

const wrapperBlankHouse = document.getElementsByClassName("wrapper-blank-house-2")[0];

const wrapperRockStep3 = document.getElementsByClassName("wrapper-rock-icon-house-3")[0];
const wrapperPaperStep3 = document.getElementsByClassName("wrapper-paper-icon-house-3")[0];
const wrapperScissorsStep3 = document.getElementsByClassName("wrapper-scissors-icon-house-3")[0];

// Save the users Pick - Either Rock, Paper, or Scissors
let playerPick = '';
// Save the house Pick - Either Rock, Paper, or Scissors
let housePick = '';
// Variable to hold a random number that will be generated to determine the house pick
let randomNum = 0;

/***/
/* Useful Functions
/***/
// Toggles "display:none" css class
displayNoneToggle = (elChange1, elChange2, elChange3) => {
  elChange1.classList.toggle('close');
  if (elChange2) {
    elChange2.classList.toggle('close');
  }
  if (elChange3) {
    elChange3.classList.toggle('close');
  }
};

// Toggles Rules modal open/close
toggleModal = (elClick, elChange1, elChange2) => {
  elClick.addEventListener("click", () => {
    displayNoneToggle(elChange1, elChange2);
  });
};

// Decide the house pick
randomHousePick = () => {
  // Random number generator between 1 and 3
  randomNum = Math.floor(Math.random() * 3) + 1;
  // House Picked: 1 = Rock, 2 = Paper, 3 = Scissors
  if (randomNum === 1) {
    housePick = "rock";
  } else if (randomNum === 2) {
    housePick = "paper";
  } else {
    housePick = "scissors";
  }
}

// Click event listener to proceed to step 2
nextStep2 = (elClick, elChange1, elChange2) => {
  elClick.addEventListener("click", () => {
    displayNoneToggle(elChange1, elChange2);

    // After player picks - House randomly picks
    randomHousePick();
   
    // If Paper is chosen
    if (elClick === btnPaperStep1) {
      playerPick = "paper";
      displayNoneToggle(wrapperPaperStep2);
    } 
    
    // If Scissors is chosen
    if (elClick === btnScissorsStep1) {
      playerPick = "scissors";
      displayNoneToggle(wrapperScissorsStep2);
    }
    
    // If Rock is chosen
    if (elClick === btnRockStep1) {
      playerPick = "rock";
      displayNoneToggle(wrapperRockStep2);
    }

    nextStep3();
  });
};

// Proceed to step 3
nextStep3 = () => {
  if (housePick === "rock") {
    displayNoneToggle(wrapperBlankHouse, wrapperRockStep3);
  } else if (housePick === "paper") {
    displayNoneToggle(wrapperBlankHouse, wrapperPaperStep3);
  } else {
    displayNoneToggle(wrapperBlankHouse, wrapperScissorsStep3);
  }
}


/***/
/* Rules Modal
/***/
// Close modal on page load
displayNoneToggle(wrapperRulesModal, modalOverlay);

// Bottom right Rules button - Opens rules modal
toggleModal(btnRules, wrapperRulesModal, modalOverlay);

// Top right 'X' close button - Closes ruels modal
toggleModal(btnCloseRules, wrapperRulesModal, modalOverlay)

// Clicking outside of modal closes modal
toggleModal(modalOverlay, wrapperRulesModal, modalOverlay)


/***/
/* Step 1 - Choose Rock, Paper or Scissors buttons
/***/
// On page load - show step 1
displayNoneToggle(wrapperStep2);

// On page load - Hide all step 2 & step 3
displayNoneToggle(wrapperRockStep2, wrapperPaperStep2, wrapperScissorsStep2);
displayNoneToggle(wrapperRockStep3, wrapperPaperStep3, wrapperScissorsStep3);

// Selecting a choice proceeds to step 2
nextStep2(btnPaperStep1, wrapperStep1, wrapperStep2)
nextStep2(btnScissorsStep1, wrapperStep1, wrapperStep2)
nextStep2(btnRockStep1, wrapperStep1, wrapperStep2)





