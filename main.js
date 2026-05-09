// DOM query 1
let Message = document.getElementById("message");

// DOM query 2
let Title = document.querySelector("#title");

// DOM query 3 (NodeList for looping)
let buttons = document.querySelectorAll(".interactive-btn");

// data
let facts = [
  "For 'Top 20' research-heavy schools, the average GPA is often 3.9+",
  "Clinical Experience: * Competitive Range: 150–300+ hours",
  "Shows community service. Think food banks, tutoring, or habitat for humanity",
  "Letters of Recommendation: Usually 3–5 letters", 
  "Avg Accepted MCAT 511+",
  "Acceptance Rate ~7%"
];

let factNumber = 0;

// Function 1: update page content
function showFact() {
  Message.textContent = facts[factNumber];
  factNumber++;

  if (factNumber >= facts.length) {
    factNumber = 0;
  }
}

// Function 2: change CSS
function highlightTitle() {
  Title.classList.toggle("title-highlight");
}

// LOOP through NodeList and attach events
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {

    // check which button was clicked
    if (event.currentTarget.id === "fact-button") {
      showFact();
    }

    if (event.currentTarget.id === "style-button") {
      highlightTitle();
    }

  });
}


// ----- COLOR MODE (Part 2) -----

let colorModeButton = document.querySelector("#color-mode-button");
let colorModeLabel = document.querySelector("#color-mode-label");
let pageBody = document.querySelector("body");

function toggleColorMode() {
  pageBody.classList.toggle("dark-mode");
  pageBody.classList.toggle("light-mode");

  if (pageBody.classList.contains("dark-mode")) {
    colorModeLabel.textContent = "Light Mode";
  } else {
    colorModeLabel.textContent = "Dark Mode";
  }
}

colorModeButton.addEventListener("click", toggleColorMode);