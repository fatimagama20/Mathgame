
//wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them
let timeremaining;
let scorevalue;
let playing=false;
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons)
    {
      button.addEventListener("click", function () {
        if (this.getAttribute("data-type")=== "submit")
          {
            if (playing==true){
              location.reload();
             }else{
                playing=true;    
                scorevalue=0;           
                document.getElementById("scorevalue").innerHTML=scorevalue;
                document.getElementById('startReset').innerHTML = "Reset Game";
                hide("gameover");
                show("timeremaining");
                timeremaining = 60;
                settimeinterval(); 
                runGame();             
             }           
          }
      });
    }
    /**
     * Displays whether user choose correct or wrong answer
     */
    let ansbuttons = document.getElementsByClassName('box');
    for (let box of ansbuttons )
    {
        box.addEventListener('click', function() 
           {
              if(parseInt(this.innerHTML)===calculateCorrectAnswer())
              {
                alert("WOW! You answered it Correct");
                incrementScore();
                runGame();
              }else{
                     alert("Aww! Wrong answer, Please try again.");
                     runGame();
                   }
         });
   }
});
/**
 * The main game "loop", called wehn the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(){
    // creates two random numbers 
    let num1 = Math.floor(Math.random() * 9) + 1;
    let num2 = Math.floor(Math.random() * 9) + 1;
    displayquestion(num1, num2);
    displayanswers();
}

/**
 * Display question with operand 1 and operand 2
 */
function displayquestion(operand1,operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "X";
}

/**
 * Calculate correct answer
 */
function calculateCorrectAnswer(){
     let operand1 = parseInt(document.getElementById('operand1').innerText);
     let operand2 = parseInt(document.getElementById('operand2').innerText);
     return (operand1 * operand2);
}
/**
 * Generate random answers and Display them
 */

function displayanswers(){
    let answers = [];
    let product1;
    let correctanswer = calculateCorrectAnswer();
   // answers.push(correctanswer);
   answers=[correctanswer];
   /* for (let i=1;i<4;i++){
        answers.push((Math.floor(Math.random() * 3) + 1) * (Math.floor(Math.random() * 3) + 1));
    }*/
    for(let i= 1;i<4;i++){
        //to generate random wrong answers
       do{
        let x = Math.round(1+Math.random()*9);
        let y = Math.round(1+Math.random()*9);
        product1 = x * y;
       }
       while(answers.indexOf(product1)>-1);
       answers.push(product1);
      const shuffle = (arrayshuffle) => {
        return arrayshuffle.sort(()  => Math.random()-0.5);
    };
    const newarray = shuffle(answers);
    newarray.forEach((choice,i) => {document.getElementsByClassName('box')[i].innerHTML=choice;
    });
}
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore(){
let oldScore = parseInt(document.getElementById('scorevalue').innerText);
document.getElementById("scorevalue").innerText = ++oldScore;
}
/**
 * Set the time interval to play the game
 */
function settimeinterval(){
  let settimeinterval = setInterval(function() {
    if (timeremaining>0) {
        timeremaining--;
        document.getElementById('timeremainingvalue').innerHTML=timeremaining;
        }else
        {
          stoptimeinterval();
          let finalscore = document.getElementById('scorevalue').innerText;
          show("gameover");
          document.getElementById("gameover").innerHTML = "<p> GAME IS OVER</p><br><p>YOUR FINAL SCORE IS "+finalscore+"</p>";
          document.getElementById('startReset').innerHTML = "Start Game";
          playing=false;
        }
  },1000);
}
  
    function stoptimeinterval(){
        clearInterval(settimeinterval);
      }
    // to show an html element
      function show(id){
        document.getElementById(id).style.display="block";
      }
      // to hide an html element
      function hide(id){
        document.getElementById(id).style.display="none";
      }
   function myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
      }
    
     //module.exports = displayquestion;