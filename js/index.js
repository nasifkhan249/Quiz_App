const startBtn = document.querySelector(".startBtn");

const rulesBox = document.querySelector(".rulesBox");

const exitButton = document.querySelector(".exitButton");

const continueButton = document.querySelector(".continueButton");

const questionBox = document.querySelector(".questionBox")


startBtn.onclick = () =>{
    rulesBox.classList.add("RulesBoxActive")
}

continueButton.onclick = () =>{
    questionBox.classList.add("questionBoxActive")
}


exitButton.onclick = () =>{
    rulesBox.classList.remove("RulesBoxActive")
}

