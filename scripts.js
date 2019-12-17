/***/
/* Declare variables
/***/

const wrapperBody = document.getElementById("wrapper-body");
const btnRules = document.getElementById("btn-rules");
const btnCloseRules = document.getElementById("btn-close-modal");
const wrapperRulesModal = document.getElementById("wrapper-rules-modal");
const modalOverlay = document.getElementById("wrapper-modal-overlay");


/***/
/* Rules Modal
/***/

// Close modal on page load
wrapperRulesModal.classList.toggle("modal-close");
modalOverlay.classList.toggle("modal-close");

// Bottom right Rules button - Opens rules modal
btnRules.addEventListener("click", () => {
  wrapperRulesModal.classList.toggle("modal-close");
  modalOverlay.classList.toggle("modal-close");
})

// Top right 'X' close button - Closes ruels modal
btnCloseRules.addEventListener("click", () => {
  wrapperRulesModal.classList.toggle("modal-close");
  modalOverlay.classList.toggle("modal-close");
});

modalOverlay.addEventListener("click", () => {
  wrapperRulesModal.classList.toggle("modal-close");
  modalOverlay.classList.toggle("modal-close");
})
/** Rules Modal end **/
