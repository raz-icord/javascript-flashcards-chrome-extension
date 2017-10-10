// List of tip, make sure to follow the format putting each tip inbetween quotes "" and ending each tip with an , before starting a new tip on the following line
var tipsList = [
"This is a test",
"This is another test",
"Add your school notes/tips into the array in main.js file to display here"
"HELLO WORLD"
];

// Tip Limit counter
var tipLimit = 3;

// Generate a number
function generateNumber() {
  return Math.floor(Math.random() * tipsList.length);
}

// Generate a tip:
// 1. Get random number from generateNumber()
// 2. Use the random number to get the tip from the array
// 3. Show the tip
function generateTip() {
  var tip = tipsList[generateNumber()];
  var tipElement = document.querySelector('.js-tip');
  var tipLimitCount = document.querySelector('.tip-limit-count');

  tipElement.innerHTML = tip;
  tipLimitCount.innerHTML = tipLimit;
}

// Tip button click
// 1. Select the tip button
// 2. Add a click event listener
// 3. When the button is clicked:
// 3a. Subtract 1 from the tipLimit
// 3b. If the tipLimit is still above or equal to 0, generate a new tip
// 3c. If not, change the button text and look
function onTipButtonClick() {
  var tipButton = document.querySelector('.tip-button');
  tipButton.addEventListener('click', function() {
    tipLimit = tipLimit - 1;
    if (tipLimit >= 0) {
      generateTip();

      if (tipLimit === 0) {
        tipButton.innerHTML = 'See you in another tab!';
        tipButton.classList.add('disabled');
      }
    }
  });
}

onTipButtonClick();

// Get the first tip
generateTip();
