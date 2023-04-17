const startBtn = document.querySelector(".startBtn");

const rulesBox = document.querySelector(".rulesBox");

const exitButton = document.querySelector(".exitButton");

const continueButton = document.querySelector(".continueButton");

const questionBox = document.querySelector(".questionBox");

const MyOptions = document.querySelector('.MyOptions');

const nextBtn = document.querySelector('.nextBtn');


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





let totalCount = 0;

nextBtn.onclick =  ()=>{
    if(totalCount < questions.length-1){
        totalCount++;
        showQuestion(totalCount);
    }else{
        console.log(`congrase`);
    }
}




function showQuestion (index){
    const Html = document.querySelector('.Html');
    let HtmlTag = questions[index].number +'.'+ questions[index].question;
    Html.innerHTML = HtmlTag;

   
    let MyOptionsTag = '<div class="options"><span>'+questions[index].option[0]+'</span></div>'
                        +'<div class="options"><span>'+questions[index].option[1]+'</span></div>'
                        +'<div class="options"><span>'+questions[index].option[2]+'</span></div>'
                        +'<div class="options"><span>'+questions[index].option[3]+'</span></div>'
                        
    MyOptions.innerHTML = MyOptionsTag;
    const total_que = document.querySelector('.total_que');
    let total_queTag = `${questions[index].number} of 5 Questions`;
    total_que.innerHTML = total_queTag;

    const options = MyOptions.querySelectorAll('.options');
    for(let i =0;i<options.length;i++){
        options[i].setAttribute("onclick","optionsSelected(this)");
    }
}

function optionsSelected (ans){
    let userSelet = ans.textContent;
    let correctAns=questions[totalCount].answer;
    let onlyOneselected = MyOptions.children.length;
    if(userSelet == correctAns){
        ans.classList.add('correct');
        console.log("You'r answer is right");
    }else{
        ans.classList.add('incorrect');
        console.log("You'r answer is false");
        for(let i = 0;i<onlyOneselected;i++){
            if(MyOptions.children[i].textContent == correctAns){
                MyOptions.children[i].setAttribute("class","options correct")
            }
        }
    }

    for(let i = 0 ;i<onlyOneselected;i++){
        MyOptions.children[i].classList.add("disable");
    }
}


