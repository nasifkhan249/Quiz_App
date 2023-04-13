const startBtn = document.querySelector(".startBtn");

const rulesBox = document.querySelector(".rulesBox");

const exitButton = document.querySelector(".exitButton");

const continueButton = document.querySelector(".continueButton");

const questionBox = document.querySelector(".questionBox");


startBtn.onclick = () =>{
    rulesBox.classList.add("RulesBoxActive")
}

exitButton.onclick = () =>{
    rulesBox.classList.remove("RulesBoxActive")
}
continueButton.onclick = () =>{
    rulesBox.classList.remove("RulesBoxActive")
    questionBox.classList.add("questionBoxActive")
    showQuestion(0);
}   

const nextBtn = document.querySelector('.nextBtn');



let totalCount = 0;

nextBtn.onclick =  ()=>{
    if(totalCount < questions.length -1){
        totalCount++;
        showQuestion(totalCount);
    }
}


function showQuestion (index){
    const Html = document.querySelector('.Html');
    let HtmlTag = questions[index].number +'.'+ questions[index].question;
    Html.innerHTML = HtmlTag;

    const MyOptions = document.querySelector('.MyOptions');
    let MyOptionsTag = '<div class="options"><span>'+questions[index].option[0]+'</span></div>'
                        +'<div class="options"><span>'+questions[index].option[1]+'</span></div>'
                        +'<div class="options"><span>'+questions[index].option[3]+'</span></div>'
                        +'<div class="options"><span>'+questions[index].option[3]+'</span></div>'
                        
    MyOptions.innerHTML = MyOptionsTag;
    const total_que = document.querySelector('.total_que');
    let total_queTag = `${questions[index].number} of 5 Questions`;
    total_que.innerHTML = total_queTag;
}









